import './InputValueCoordinates.scss'

export default function InputValueCoordinates() {
  return (
    <label htmlFor="input-coordinates">
      <input
        className="input-coordinates"
        type="text"
        id="input-coordinates"
        placeholder="enter coordinates"
      />
    </label>
  );
}
