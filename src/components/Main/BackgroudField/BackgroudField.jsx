import "./BackgroudField.scss";

export default function BackgroudField({ children, isActive}) {
  return (
    <div
      className={
        isActive
          ? "visually-hidden"
          : "backgroud-field"
      }
    >
        
      {children}
    </div>
  );
}
