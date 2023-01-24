import { useState } from "react";

export const Slider = ({
  onSliderValueChange,
}: {
  onSliderValueChange: (e: number) => void;
}) => {
  const [value, setValue] = useState(10);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.valueAsNumber;
    setValue(newValue);
    onSliderValueChange(newValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <p>Password length</p>
        <p className="text-blue-500 text-xl">{value}</p>
      </div>
      <input
        type="range"
        min="5"
        max="25"
        value={value}
        step="1"
        onChange={(e) => handleChange(e)}
        className="w-full cursor-pointer"
      ></input>
    </div>
  );
};
