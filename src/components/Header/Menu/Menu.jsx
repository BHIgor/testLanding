
import './Menu.scss';

export const Menu = () => {


  return <>
    <aside className="menu page__menu" id="menu">
      <div className="container menu__container">
        <a href="/" className="menu__icons menu__icons--close">.</a>


        <nav className="menu__nav">
          <a className="menu__link" href="#help">
            Про нас
          </a>
          <a className="menu__link" href="#blog">
            Тарифи
          </a>
          <a className="menu__link" href="#learn">
            Переваги
          </a>
          <a className="menu__link" href="https://t.me/tgBazarNews">
          Telegram канал
        </a>
        </nav>

      </div>
    </aside>
  </>;
}