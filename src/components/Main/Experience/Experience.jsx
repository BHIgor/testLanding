
import './Experience.scss';

export const Experience = () => {

  return <>
    <div className="container exprnc" id='blog'>
      <span className="exprnc__title">
        Тарифи
      </span>

      <span className="exprnc__subTitle">
        Кожен тариф містить однакові позиції.<br />Вартість тарифу залежить від кількості днів.
      </span>

      <div className="exprnc__table">
        <span className='exprnc__item'>▫️ Необмежену кількість категорій</span>
        <span className='exprnc__item'>▪️ Необмежену кількість товарів</span>
        <span className='exprnc__item'>▫️ Необмежену кількість банерів</span>
        <span className='exprnc__item'>▪️ Дашборд (без обмежень)</span>
        <span className='exprnc__item'>▫️ Можливість ділитись посиланням на товар</span>
        <span className='exprnc__item'>▪️ Зміна кольорового дизайну бота</span>
        <span className='exprnc__item'>▫️ Повідомлення про замовлення</span>
        <span className='exprnc__item'>▪️ Сповіщення про нові повідомлення в Telegram</span>
        <span className='exprnc__item'>▫️ Відслідковування трафіку</span>
        <span className='exprnc__item'>▪️ Аналітика</span>
      </div>

      <div className="exprnc__price">Вартість</div>

      <div className="exprnc__priceBlock">
        <span className="exprnc__priceBlock--item">🔥 Тиждень: 100 грн. </span>
        <span className="exprnc__priceBlock--item">🔥 Місяць: 300 грн.</span>
        <span className="exprnc__priceBlock--item">🔥 3 місяці: 700 грн.</span>
        <span className="exprnc__priceBlock--item">🔥 Рік: 2500 грн.</span>
      </div>
      <div className="exprnc__priceBlock--item">🎁 Безкоштовний пробний період 3 дні</div>
      <button className='header__button'>
      <a href='https://t.me/tgBazarShop_bot' className='silkaWhite'>Створити магазин </a>
      </button>
    </div>
  </>;
}