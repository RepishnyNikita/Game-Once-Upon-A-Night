import { useState } from "react";
import { iconSrcFooter } from "../iconSrc.js";
import Inventory from "../ElementInventory/Inventory.jsx";
import "./Footer.scss";
import Button from "../ui/buttons/Button/Button.jsx";
import SettingModal from "../ui/settingModal/SettingModal.jsx";

export default function Footer({currentBg}) {
  const [activeMenu, setActiveMenu] = useState('');
  const [animation, setAnimation] = useState("");

  function handleMenuChange(menuName) {
    if (activeMenu !== menuName) {
      setActiveMenu(menuName);
      if(activeMenu === 'setting'){
        isAnimation()
      }
    } else {
      setActiveMenu('');
    }
  }

  function isAnimation() {
    setAnimation(animation === "" ? "forward" : "");
  }

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__setting">
          <Button
            src={iconSrcFooter.setting}
            additionalStyles={true}
            width="100%"
            height="80"
            title={"setting"}
            animation={animation}
            onClick={()=>{
              isAnimation()
              handleMenuChange('setting')
            }}
          />
          <SettingModal activeMenu={activeMenu} currentBg={currentBg}/>
           
        </div>
            
        <Inventory activeMenu ={activeMenu} />
        
  
        <Button
          src={iconSrcFooter.inventory}
          additionalStyles={true}
          onClick={()=>{
            handleMenuChange('inventory')
          }}
          width="100%"
          height="80"
          title={"inventory"}
        />
      </div>
    </footer>
  );
}
