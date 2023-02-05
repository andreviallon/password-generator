export const Checkbox = ({
  label,
  isChecked,
  onCheck,
}: {
  label: string;
  isChecked: boolean;
  onCheck: any;
}) => {
  return (
    <label className="flex items-center">
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onCheck}
        className="w-4 h-4 cursor-pointer"
      />
      <span className="ml-3 cursor-pointer">{label}</span>
    </label>
  );
};
