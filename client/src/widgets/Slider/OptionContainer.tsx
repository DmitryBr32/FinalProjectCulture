import React, { useState } from "react";
import { Option } from "./Option";

interface OptionsContainerProps {
  options: string[]; // Массив строк для вариантов
}

export const OptionsContainer: React.FC<OptionsContainerProps> = ({
  options,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Состояние: индекс активного элемента

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {options.map((option, index) => (
        <Option
          key={index} //  ключ нужен для React, чтобы он мог эффективно обновлять DOM
          text={option}
          onClick={handleOptionClick}
          isActive={activeIndex === index}
          index={index}
        />
      ))}
    </div>
  );
};
export default OptionsContainer;
