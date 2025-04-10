import './GenerationItem.scss'

export default function GenerationItem({icon, count}) {
  return (
    <div className="generation-item">
      <img src={icon} alt="" width="70" height="70"/>
      <span>x</span>
      <span>{count}</span>
    </div>
  );
}
