import marketing from './../../../images/marketing.svg'
import seo from './../../../images/SEO.svg'
import webdev from './../../../images/WEBDEV.svg'
import boost from './../../../images/boost.svg'
import copy from './../../../images/copyrighting.svg'
import phone from './../../../images/phone.svg'


import './ArrBlocks.scss';

export const ArrBlocks = () => {

  const content = [{
    img: marketing,
    title: 'Интернет маркетинг',
    text: 'Опытные маркетологи компании Skyweb занимаются построением эффективных интернет маркетинг стратегий.'
  },
  {
    img: webdev,
    title: 'Веб Разработка',
    text: 'В Skyweb вы можете заказать разработку сайта согласно предоставленному техническому заданию.'
  },
  {
    img: seo,
    title: 'SEO Оптимизация',
    text: 'Команда профессионалов выполняет комплексный анализ сайта и оптимизирует SEO показатели.'
  },
  {
    img: phone,
    title: 'Разработка Приложений',
    text: 'Мы делаем приложения для мобильных устройств с последующей поддержкой при релизе в маркетплейсы.'
  },
  {
    img: boost,
    title: 'Ускорение Сайта',
    text: 'Мы знаем, как ускорить ваш сайт. Разработчики увеличивают скорость загрузки и делают это качественно.'
  },
  {
    img: copy,
    title: 'SEO Копирайтинг',
    text: 'Большая команда копирайтеров в короткие сроки пишут уникльные SEO тексты для сайта с ключевыми словами.'
  }]

  return <>
    <div className="container arrBlocks">
      {
        content.map((e, index) => (
          <div key={index}>
            <div className="arrBlocks__block">
              <div className="arrBlocks__photoBlock">
                <img
                  className="arrBlocks__photo"
                  src={e.img}
                  alt='Фото'
                />
              </div>

              <span className="arrBlocks__title">
                {e.title}
              </span>

              <span className="arrBlocks__text">
                {e.text}
              </span>

              <div className="arrBlocks__buttonBlock">
                <button className="arrBlocks__button">
                  Узнать больше
                </button>
              </div>
             
            </div>
          </div>
        ))
      }
    </div>
    <div className="arrBlocks__background"></div>
  </>;
}