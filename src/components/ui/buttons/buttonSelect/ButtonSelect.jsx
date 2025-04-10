import "./ButtonSelect.scss";

export default function ButtonSelect({ icon, munis = null, description }) {
  return (
    <button className="button-select">
      <img src={icon} width={"70"} height={"70"}/>
      <p>{description}</p>
      <span>{munis}</span>
    </button>
  );
}
