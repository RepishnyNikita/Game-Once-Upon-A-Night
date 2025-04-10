import "./ButtonSearchHouse.scss";

export default function ButtonStartGame({ onClick, isActive }) {
  return (
    <button
      className={isActive ? "button-search-house" : "visually-hidden"}
      onClick={onClick}
    >
      House search
    </button>
  );
}
