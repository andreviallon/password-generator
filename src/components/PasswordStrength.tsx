const MAX_STRENGTH = 4;

export const PasswordStrength = ({
  strengthLevel,
}: {
  strengthLevel: number;
}) => {
  const getStrengthTitle = () => {
    if (strengthLevel === 1) return <p>Very week</p>;
    if (strengthLevel === 2) return <p>Week</p>;
    if (strengthLevel === 3) return <p>Medium</p>;
    if (strengthLevel === 4) return <p>Strong</p>;
  };

  const getStrengthMarker = () => {
    let classes = "w-2 h-full";
    const space = " ";

    if (strengthLevel === 1) classes += space + "bg-red-600";
    if (strengthLevel === 2) classes += space + "bg-red-400";
    if (strengthLevel === 3) classes += space + "bg-yellow-400";
    if (strengthLevel === 4) classes += space + "bg-green-400";

    return classes;
  };

  return (
    <div className="p-4 bg-slate-800 flex justify-between items-center">
      <p className="uppercase text-sm text-slate-400">Strength</p>
      <div className="flex gap-2 h-full">
        <p className="uppercase mr-2">{getStrengthTitle()}</p>
        {Array.from(Array(strengthLevel)).map((_, index) => (
          <div key={index} className={getStrengthMarker()}></div>
        ))}
        {Array.from(Array(MAX_STRENGTH - strengthLevel)).map((_, index) => (
          <div
            key={index}
            className="w-2 h-full bg-slate-800 border border-solid border-white"
          ></div>
        ))}
      </div>
    </div>
  );
};
