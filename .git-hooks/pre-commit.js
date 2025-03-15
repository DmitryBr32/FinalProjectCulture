const { exec } = require("child_process");
const { exit } = require("process");

console.log("🚀 Запуск pre-commit проверок...");

// Функция для обработки ошибок
const handleError = (step, error, stdout, stderr) => {
  console.error(`❌ Ошибка ${step}`);

  // Обработка stdout: добавляем ⛔ к каждой строке с ошибкой
  if (stdout) {
    const outputLines = stdout.split("\n"); // Разделяем stdout на строки
    outputLines.forEach((line) => {
      if (line.trim() && line.includes("error")) { // Проверяем, содержит ли строка ошибку
        console.error(`\n⛔  ${line}`);
      } else if (line.trim()) {
        console.log(line); // Вывод обычных строк без префикса
      }
    });
  }

  // Обработка stderr: добавляем ⛔ к каждой строке
  if (stderr) {
    const errorLines = stderr.split("\n"); // Разделяем stderr на строки
    errorLines.forEach((line) => {
      if (line.trim()) { // Игнорируем пустые строки
        console.error(`\n⛔  ${line}`);
      }
    });
  }

  exit(1);
};

// Функция для выполнения команд
const runCommand = (command, step, next) => {
  console.log(`🔍 ${step}...`);
  exec(command, (error, stdout, stderr) => {
    if (error) {
      handleError(step, error, stdout, stderr);
    } else {
      console.log(stdout);
      if (next) next();
    }
  });
};

// Последовательное выполнение команд
runCommand("npm run lint", "Проверка линтинга JS/TS файлов", () => {
  runCommand('npx stylelint "**/*.css" --ignore-path .stylelintignore --fix', "Проверка CSS файлов", () => {
    runCommand("npm run build", "Сборка проекта", () => {
      console.log("✅ Все проверки успешно пройдены! Можно выполнять коммит.");
      exit(0);
    });
  });
});