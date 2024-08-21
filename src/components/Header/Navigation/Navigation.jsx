import logo from './../../../images/logo.png'
import './Navigation.scss'

export const Navigation = () => {

  return <>
    <div className="navigation">
      <div className="navigation__logo">
        <span className="navigation__logo--text">
          <img src={logo} alt="Лого" className='navigation__logo--img' />
        </span>

        <span className="navigation__logo--lang">
          <span className="navigation__logo--langColor">TG Bazar</span><br/> Твій магазин
        </span>
      </div>

      <nav className="navigation__nav">
        <a className="navigation__link" href="#help">
          Про нас
        </a>
        <a className="navigation__link" href="#blog">
          Тарифи
        </a>
        <a className="navigation__link" href="#learn">
          Переваги
        </a>
        <a className="navigation__link" href="https://t.me/tgBazarNews">
          Telegram канал
        </a>
      </nav>

      <div className="navigation__button">

        <a href='https://t.me/tgBazarShop_bot' className='navigation__button--reg'>
          Перейти  до  бота
        </a>
      </div>

      <a href="#menu" className="navigation__menu">
        <div className="navigation__menu--line navigation__menu--topLine"></div>
        <div className="navigation__menu--line navigation__menu--middleLine"></div>
        <div className="navigation__menu--line navigation__menu--bottomLine"></div>
      </a>
    </div>
  </>;
}