interface OptionProps {
  text: string; // Добавим пропсу для текста варианта
  onClick: (index: number) => void; // Добавим колбэк функцию для обработки клика
  isActive: boolean; // Добавим пропсу для определения активного состояния
  index: number; // Добавим индекс элемента
}

export const Option: React.FC<OptionProps> = ({
  text,
  onClick,
  isActive,
  index,
}) => {
  return (
    <div
      className={`option ${isActive ? "active" : ""}`} // Условное добавление класса
      onClick={() => onClick(index)}
    >
      {text}
    </div>
  );
};
