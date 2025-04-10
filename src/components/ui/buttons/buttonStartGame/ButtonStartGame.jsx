import './buttonStartGame.scss'

export default function ButtonStartGame({onClick}) {
    return(
        <button className="button-start-game" onClick={onClick}>
          Start
        </button>
    )
}