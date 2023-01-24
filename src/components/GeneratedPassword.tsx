import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export const GeneratedPassword = ({
  generatedPassword,
  onClick,
}: {
  generatedPassword: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex justify-between items-center cursor-pointer">
      <p>{generatedPassword}</p>
      <div onClick={onClick}>
        <FontAwesomeIcon
          icon={faCopy}
          className="text-blue-500 hover:text-blue-600 active:text-blue-700 transition"
        />
      </div>
    </div>
  );
};
