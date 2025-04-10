import "./Button.scss";
import { iconSrsOther } from "../../../iconSrc";
export default function Button({
  src,
  children,
  title,
  additionalStyles,
  cursor,
  onClick,
  width = "60",
  height = "60",
  animation,
}) {
  return (
    <button
      className={
        additionalStyles
          ? `button button-alt ${title === "setting" && (animation || " ")}`
          : "button"
      }
      style={
        cursor && { cursor: `url(${iconSrsOther.flashlightCursor}), auto` }
      }
      onClick={onClick}
    >
      <img
        className={animation}
        src={src}
        alt=""
        width={width}
        height={height}
        loading="lazy"
        title={title}
      />
      {children}
    </button>
  );
}
