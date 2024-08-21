import aboutPhoto from './../../../images/aboutPhoto.png'

import './About.scss';

export const About = () => {

  return <>
    <div className="container about" id='learn'>
      <img src={aboutPhoto} alt="Фото" className="about__image" />
      <div className="about__info">
        <span className="about__info--title">
          Які наші переваги?
        </span>

        <span className="about__info--subTitle">
          Наше завдання підвищити кількість ваших продажів.
        </span>

        <span className="about__info--text">
          Ми пропонуємо Вам:
        </span>

        <div className="about__statistic">
          <div className="about__statistic--titleBlock">
            <div className="about__statistic--subTitleText">
              <span className="about__statistic--subTitle">Унікальний дизайн</span> - ви самі обираєте кольорову гамму, та розділи які відображати у Вашому магазині. Сам магазин відкривається у браузері та виглядає як професійний магазин такі як rozetka, citrus, allo та інші. (Дивіться демо магазину)
               
            </div>


          </div>


          <div className="about__statistic--titleBlock">
          <div className="about__statistic--subTitleText">
              <span className="about__statistic--subTitle">Вартість</span> - ціна значно нижча ніж в схожих конструкторах
               
            </div>

          </div>

          <div className="about__statistic--titleBlock">
          <div className="about__statistic--subTitleText">
              <span className="about__statistic--subTitle">Підвищення продаж</span> - ваші товари можуть показуватись не тільки у вашому магазині, а ще і в інших які створили на платформі TG Bazar.
               
            </div>

          </div>


          <div className="about__statistic--titleBlock">
          <div className="about__statistic--subTitleText">
              <span className="about__statistic--subTitle">Функціональність</span> - клієнти можуть ділитись вашими товарами прямо в telegram. Слідкувати за статусом замовленням, ви в свою чергу цим статусом можете керувати, та ще багато іншого.
               
            </div>

          </div>

          <div className="about__statistic--titleBlock">
          <div className="about__statistic--subTitleText">
              <span className="about__statistic--subTitle">Зручність</span> - все реалізовано в інтерфейсі telegram, ви можете редагувати, додавати чи видаляти товари прямо зі свого смартфона. Керувати замовленнями та підтримувати зв'язок зі своїми клієнтами.
               
            </div>

          </div>




        </div>
      </div>
    </div>
  </>;
}