import { ChangeEvent } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {
  handleDecrease: () => void;
  handleIncrease: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

export function Quantity({
  value,
  handleChange,
  handleDecrease,
  handleIncrease,
}: Props) {
  return (
    <div className="border inline-flex items-center border-gray-500 p-3">
      <button
        className="px-3 disabled:text-gray-500 hover:disabled:cursor-not-allowed"
        onClick={handleDecrease}
        disabled={value === 1}
      >
        <AiOutlineMinus />
      </button>
      <input
        className="w-12 text-center appearance-none text-gray-500"
        type="number"
        min={1}
        value={value}
        onChange={handleChange}
      />
      <button className="px-3" onClick={handleIncrease}>
        <AiOutlinePlus />
      </button>
    </div>
  );
}
