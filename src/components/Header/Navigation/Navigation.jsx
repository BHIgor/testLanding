
import './Navigation.scss'

export const Navigation = () => {

  return <>
    <div className="navigation">
      <div className="navigation__logo">
        <span className="navigation__logo--text">
          Logo
        </span>

        <span className="navigation__logo--lang">
          <span className="navigation__logo--langColor">ENG |</span> RU
        </span>
      </div>

      <nav className="navigation__nav">
        <a className="navigation__link" href="#help">
          Помощь
        </a>
        <a className="navigation__link" href="#blog">
          Блог
        </a>
        <a className="navigation__link" href="#learn">
          Обучение
        </a>
        <a className="navigation__link" href="#catalog">
          Каталог блогеров
        </a>
      </nav>

      <div className="navigation__button">
        <a href='/' className='navigation__button--enter'>
          Войти
        </a>

        <a href='/' className='navigation__button--reg'>
          Регистрация
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