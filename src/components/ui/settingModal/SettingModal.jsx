import { useState } from "react";
import "./SettingModal.scss";
import { backgroundImageSrc } from "../../iconSrc";


export default function SettingModal({ activeMenu, currentBg }) {
  const [selectedOption, setSelectedOption] = useState("dark");

  function onchange(e) {
    setSelectedOption(e.target.value);
    if(e.target.value !== 'dark'){
      currentBg(backgroundImageSrc.light)
    }else{
      currentBg(backgroundImageSrc.dark)
    }
  }

  return (
    <div
      className={
        activeMenu === "setting" ? "setting-modal is-active" : "setting-modal"
      }
    >
      <label htmlFor="dark">
        <input
          name="radio"
          type="radio"
          id="dark"
          value="dark"
          onChange={onchange}
          checked={selectedOption === "dark"} // получаем true/false
        />
        dark background
      </label>
      <label htmlFor="light">
        <input
          name="radio"
          type="radio"
          id="light"
          value="light"
          onChange={onchange}
          checked={selectedOption === "light"}
        />
        light background
      </label>

    </div>
  );
}
