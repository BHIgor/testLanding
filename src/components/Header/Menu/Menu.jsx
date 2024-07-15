
import './Menu.scss';

export const Menu = () => {


  return <>
    <aside className="menu page__menu" id="menu">
      <div className="container menu__container">
        <a href="#" className="menu__icons menu__icons--close"></a>


        <nav className="menu__nav">
          <a className="menu__link" href="#help">
            Помощь
          </a>
          <a className="menu__link" href="#blog">
            Блог
          </a>
          <a className="menu__link" href="#learn">
            Обучение
          </a>
          <a className="menu__link" href="#catalog">
            Каталог блогеров
          </a>
        </nav>

      </div>
    </aside>
  </>;
}