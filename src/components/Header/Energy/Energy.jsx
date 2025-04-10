import './Energy.scss'

export default function Energy() {
  return (
    <div className="header__energy tile">
      <div className="header__energy-count">
        <span className="header__energy-count__color" data-js-energy-count>
          8
        </span>
        <span>/</span>
        <span data-js-energy-max-count>8</span>
      </div>

      <div className="header__energy-timer">
        <span data-js-energy-timer="minutes">00</span>
        <span>:</span>
        <span data-js-energy-timer="seconds">00</span>
      </div>
    </div>
  );
}
