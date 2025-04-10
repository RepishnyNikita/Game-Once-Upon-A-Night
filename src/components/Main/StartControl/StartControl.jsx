import CardOfValuables from "../../CardOfValuables/CardOfValuables";
import ButtonSelect from "../../ui/buttons/buttonSelect/ButtonSelect";
import { iconSrsOther } from "../../iconSrc";
import './StartControl.scss'

export default function StartControl({data}) {
  return (
    <div className="start-control">
        <ButtonSelect icon={iconSrsOther.door} description={"Let's start with the doors."} />
        <ButtonSelect icon={iconSrsOther.window} description={"Let's start with the window."} />
        {data.garage > 0 ? <ButtonSelect icon={iconSrsOther.garage} description={"Let's start with the garage."}/> : ''}
        
        <div className="start-item-search">
          <CardOfValuables icon={data.idItem.icon} style={data.idItem.style} summ={data.summ} name={data.idItem.name}/>
        </div>
    </div>
  );
}
