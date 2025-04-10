import { useState } from "react";

import ButtonSearchHouse from "../ui/buttons/buttonSearchHouse/ButtonSearchHouse";
import BackgroudField from "./BackgroudField/BackgroudField";
import SectionStartGame from "./SectionStartGame/SectionStartGame";
import StartControl from "./StartControl/StartControl";
import ButtonCloseGameField from "../ui/buttons/buttonCloseGameField/ButtonCloseGameField";

export default function Main() {
  const [isActive, setIsActive] = useState(true);
  const [tabs, setTabs] = useState("start");
  const [dataFromChild, setDataFromChild] = useState({})

  function saveValuesStartGame(data){
    setDataFromChild(data) // Обновляем состояние родителя
}
 
  function handelClick() {
    setIsActive((prev) => !prev);
    setTabs("start");
  }

  return (
    <main>
      <div className="container container--center">
        <ButtonSearchHouse isActive={isActive} onClick={handelClick} />

        <BackgroudField isActive={isActive} onClick={handelClick}>
          <ButtonCloseGameField
            isButtonExit={tabs !== "start" ? true : false}
            onClick={handelClick}
          />

          <SectionStartGame
            active={tabs}
            onChange={(current) => setTabs(current)}
            onSendData={saveValuesStartGame}
          />
          {tabs === "select" && <StartControl data={dataFromChild}/>}
        </BackgroudField>
      </div>
    </main>
  );
}
