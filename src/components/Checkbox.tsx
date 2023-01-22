export const Checkbox = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" value="123" className="w-4 h-4 cursor-pointer" />
      <label className="ml-3">{title}</label>
    </div>
  );
};
