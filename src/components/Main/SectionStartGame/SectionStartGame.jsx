import { useState } from "react";
import "./SectionStartGame.scss";
import InputValueCoordinates from "../../ui/InputValueCoordinates/InputValueCoordinates";
import GenerationItem from "./GenerationItem/GenerationItem";
import CardOfValuables from "../../CardOfValuables/CardOfValuables";
import ButtonGeneration from "./ButtonGeneration/ButtonGeneration";
import ButtonStartGame from "../../ui/buttons/buttonStartGame/ButtonStartGame";

import { iconSrcHomes, iconSrsOther } from "../../iconSrc";
import { itemOfValuables } from "../../../resources/itemOfValuables";

import { randomCount , randomIcons, saveValuesStartGame } from "../../../resources/utils";


export default function SectionStartGame({active, onChange, onSendData}) {
  const [isActiveAnimation, setIsActiveAnimation] = useState(false);
  const [isCount, setIsCount] = useState(3);
  const [item, setItem] = useState(
    itemOfValuables[randomCount(0, itemOfValuables.length - 1)]
  );
  const [iconHomes, setIconHomes] = useState(randomIcons(iconSrcHomes));
  const [summ, setSumm] = useState(randomCount(40, 150));
  const [isRandomCountDoor, setIsRandomCountDoor] = useState(randomCount(4, 8));
  const [isRandomCountWindow, setIsRandomCountWindow] = useState(
    randomCount(4, 10)
  );
  const [isRandomCountGarage, setIsRandomCountGarage] = useState(
    randomCount(0, 1)
  );

  function handleClick() {
    setIsCount((prevCount) => prevCount - 1);
    setIsActiveAnimation(true);
    setTimeout(() => setIsActiveAnimation(false), 800);
    setItem(itemOfValuables[randomCount(0, itemOfValuables.length - 1)]);
    setIconHomes(randomIcons(iconSrcHomes));
    setIsRandomCountDoor(randomCount(4, 8));
    setIsRandomCountWindow(randomCount(4, 10));
    setIsRandomCountGarage(randomCount(0, 1));
    setSumm(randomCount(40, 150));
  }

  const sendDataToParent = () => {
    let data = saveValuesStartGame(isRandomCountDoor, isRandomCountWindow, isRandomCountGarage, item, summ)
    onSendData(data); 
  };


  return (
    <div className={active === 'start' ? 'start-game' : 'visually-hidden'} >
      <InputValueCoordinates />

      <div className="start-game__body">
        <div className="start-game__homes-container">
          <img src={iconHomes} width="250" height="250" alt="" />
        </div>

        <div className="start-game__generation-random">
          <GenerationItem count={isRandomCountDoor} icon={iconSrsOther.door} />
          <GenerationItem
            count={isRandomCountWindow}
            icon={iconSrsOther.window}
          />
          <GenerationItem
            count={isRandomCountGarage}
            icon={iconSrsOther.garage}
          />
        </div>

        <div className="start-game__target-search">
          <span>Find:</span>
          <CardOfValuables
            icon={item.icon}
            style={item.style}
            name={item.name}
            summ={summ}
          />
        </div>
      </div>

      <div className="start-game__controls">

        <ButtonStartGame onClick={()=> {
          onChange('select')
          sendDataToParent()
        }}/>

        <ButtonGeneration
          activeAnimation={isActiveAnimation}
          count={isCount === 0 ? setIsCount(3) : isCount}
          onClick={handleClick}
          disabled={isActiveAnimation}
        />
      </div>
    </div>
  );
}
