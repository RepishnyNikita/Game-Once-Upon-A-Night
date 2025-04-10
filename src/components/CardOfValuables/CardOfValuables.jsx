import "./CardOfValuables.scss";

export default function CardOfValuables({ icon, style, name, summ}) {
  return (
    <div title={name} className={`card-of-valuables ${!style ? "" : style}`}>
      <img src={icon} alt={name} width="80" height="80" />
      {name === 'Money' ? <span className="card-of-valuables-summ">{summ}</span> : ''}
    </div>
  );
}
