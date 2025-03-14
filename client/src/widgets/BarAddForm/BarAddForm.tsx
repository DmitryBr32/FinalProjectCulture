export default function BarAddForm() {
  return (
    <>
      <label>Введите тип напитка</label>
      <input type="text" id="type" />
      <label>Введите марку напитка</label>
      <input type="text" id="title" />
      <label>Введите сколько напитка осталось (мл)</label>
      <input type="number" id="balance" />;
    </>
  );
}
