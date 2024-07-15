import { Navigation } from './Navigation/Navigation';
import headerPhoto from './../../images/headerPhoto.png'

import './Header.scss';

export const Header = () => {

  return <>
    <header className="header">
      <div className="container">
        <Navigation />

        <div className="header__container">
          <div className="header__block">
            <span className="header__title">
              EPICSTARS — платформа, объединяющая <span className='header__title--underline'>рекламодателей</span> и <span className='header__title--underline'>блогеров</span>
            </span>

            <span className="header__subTitle">
              Помогаем брендам и компаниям транслировать свои маркетинговые активности через лидеров мнений и блогеров
            </span>

            <button className='header__button'>
              Давайте начнем!
            </button>   
          </div>

          <img src={headerPhoto} alt="Фото" className='header__photo' />
        </div>
      </div>
    </header>
  </>;
}