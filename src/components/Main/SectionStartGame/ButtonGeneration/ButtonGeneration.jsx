import { iconSrsOther } from "../../../iconSrc";

export default function ButtonGeneration({
  count,
  onClick,
  activeAnimation,
  disabled,
}) {
  return (
    <button
      className={`start-game__button-generation `}
      onClick={onClick}
      disabled={disabled}
    >
      <img
        className={activeAnimation ? "is-active" : ""}
        src={iconSrsOther.generation}
        alt=""
      />
      <span className="start-game__button-generation__count">{count}</span>
    </button>
  );
}
