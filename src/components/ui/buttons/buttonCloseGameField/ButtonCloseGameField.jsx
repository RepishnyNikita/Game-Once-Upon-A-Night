import { buttonsClose } from "../../../../resources/objButtons";
import "./ButtonCloseGameField.scss";

export default function ButtonCloseGameField({
  onClick,
  isButtonExit,
}) {
  return (
    <button
      className={`button-close-game-field ${isButtonExit && "tooltip"}`}
      onClick={onClick}

    >
      <img
        src={buttonsClose[!isButtonExit ? 0 : 1].icon}
        alt={buttonsClose[!isButtonExit ? 0 : 1].name}
        title={buttonsClose[!isButtonExit ? 0 : 1].name}
        width="40"
        height="40"
      />
    </button>
  );
}
