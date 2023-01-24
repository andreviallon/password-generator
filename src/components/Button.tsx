export const Button = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-full p-2 bg-blue-500 border-2 border-solid border-blue-700 hover:bg-blue-600 active:bg-blue-700 transition"
      onClick={onClick}
    >
      <span>{name}</span>
    </button>
  );
};
