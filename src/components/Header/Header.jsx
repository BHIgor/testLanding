import { Navigation } from './Navigation/Navigation';
import headerPhoto from './../../images/Vector.png'

import './Header.scss';

export const Header = () => {

  return <>
    <header className="header">
      <div className="container">
        <Navigation />

        <div className="header__container">
          <div className="header__block">
            <span className="header__title">
              TG Bazar — конструктор інтернет-магазинів в telegram
            </span>

            <span className="header__subTitle">
              Створи власний інтернет-магазин в telegram за 5 хвилин.
            </span>

            <div className="header__flex">
              <button className='header__button'>
                <a href='https://t.me/tgBazarShop_bot' className='silkaWhite'>Створити магазин</a>
              </button>

              <button className='header__buttonDemo'>
                <a href='https://t.me/demoTgBazar_bot' className='silka'>Демо бот-магазин</a>
              </button>
            </div>

          </div>

          <img src={headerPhoto} alt="Фото" className='header__photo' />
        </div>
      </div>
    </header>
  </>;
}