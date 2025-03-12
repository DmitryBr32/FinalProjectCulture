import Bar from "@/widgets/Bar/Bar";
import BarStorage from "@/widgets/BarStorage/BarStorage";

export default function MyBarPage() {
  return (
    <div>
      <h1>Мой бар</h1>
      <BarStorage />
      <Bar />
    </div>
  );
}
