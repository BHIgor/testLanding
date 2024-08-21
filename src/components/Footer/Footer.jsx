
import footerPhoto from './../../images/footerImg.png'

import './Footer.scss';

export const Footer = () => {

  return <>
    <div className="container footer">
      <img src={footerPhoto} alt="Фото" className="footer__image" />

      <div className="footer__block1">
        <span className="footer__subTitle">
          Масштабуй свій бізнес разом із нами
        </span>

        <span className="footer__title">
          Переходь за посиланнями
        </span>
        <button className='header__button'>
          <a href='https://t.me/tgBazarShop_bot' className='silkaWhite'>Створити магазин</a>
        </button>

        <button className='header__buttonDemo'>
          <a href='https://t.me/demoTgBazar_bot' className='silka'>Демо бот-магазин</a>
        </button>



      </div>
    </div>

  </>;
}