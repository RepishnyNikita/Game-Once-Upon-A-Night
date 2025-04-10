import Button from '../ui/buttons/Button/Button';
import Energy from './Energy/Energy';
import {iconSrcHeader} from '../iconSrc';
import './Header.scss';

export default function Header (){
    return(
        <header className="header">
            <div className="header__inner container">

                <Button src={iconSrcHeader.shop} title={'shop'}>
                    <span>0</span>
                </Button>
                
                <Energy/>

                <div className="header__global-timer">
                    <img className="header__global-timer__icon" src={iconSrcHeader.sandTimer} alt="" width="60" height="60" loading="lazy"/>
                    <div className="header__global-timer__value">
                        <span data-js-global-timer="minutes">00</span>
                        <span>:</span>
                        <span data-js-global-timer="seconds">00</span>
                    </div>
                </div>

                <div className="header__statistics">

                    <div className="header__statistics-value">
                        <span>00</span>
                        <img src={iconSrcHeader.house} alt="" width="50" height="50" loading="lazy"/>
                    </div>

                    <div className="header__statistics-value">
                        <span>00</span>
                        <img src={iconSrcHeader.prison} alt="" width="50" height="50" loading="lazy"/>
                    </div>
                    
                </div>

                <div className="header__gamer" >

                    <Button additionalStyles={true} cursor={true} src={iconSrcHeader.user} title={'user'}/>

                    {/* <div className="header__gamer-popup popup" >

                        <p className="popup__name-gamer" data-js-user-name >Tractor</p>

                        <ul className="popup__list">
                            <li className="popup__item">
                                <div className="popup__rating">
                                    Rating:
                                    <span data-js-popup-rating>0%</span>
                                </div>
                            </li>
                        </ul>

                        <button className="popup__button-reset" type="button" data-js-popup-button-reset-game>Reset game</button>
                    </div> */}
                    
                </div>
                
            </div>
        </header>
    )
}