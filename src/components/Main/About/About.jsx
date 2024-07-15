import aboutPhoto from './../../../images/aboutPhoto.png'

import './About.scss';

export const About = () => {

  return <>
    <div className="container about">
      <img src={aboutPhoto} alt="Фото" className="about__image" />
      <div className="about__info">
        <span className="about__info--title">
          О нашей компании
        </span>

        <span className="about__info--subTitle">
          Наша задача – Обеспечить бизнес грамотной системой маркетинга
        </span>

        <span className="about__info--text">
          Компания Skyweb предоставляет услуги профессиональных интернет маркетологов клиентам по всему миру. Среди наиболее востребованных услуг, нацеленных на развитие бизнеса, находятся следующие:
        </span>

        <div className="about__statistic">
          <div className="about__statistic--titleBlock">
            <span className="about__statistic--subTitle">
              Веб разработка
            </span>

            <span className="about__statistic--procent">
              90%
            </span>
          </div>

          <input type="range" min="0" max="100" defaultValue="90" className="about__statistic--input about__statistic--input1" />

          <div className="about__statistic--titleBlock">
            <span className="about__statistic--subTitle">
              SEO Оптимизация
            </span>

            <span className="about__statistic--procent">
              85%
            </span>
          </div>

          <input type="range" min="0" max="100" defaultValue="85" className="about__statistic--input about__statistic--input2" />

          <div className="about__statistic--titleBlock">
            <span className="about__statistic--subTitle">
              Интернет Маркетинг
            </span>

            <span className="about__statistic--procent">
              70%
            </span>
          </div>

          <input type="range" min="0" max="100" defaultValue="70" className="about__statistic--input about__statistic--input3" />

          <div className="about__statistic--titleBlock">
            <span className="about__statistic--subTitle">
              Мобильная разработка
            </span>

            <span className="about__statistic--procent">
              40%
            </span>
          </div>

          <input type="range" min="0" max="100" defaultValue="40" className="about__statistic--input about__statistic--input4" />


          
        </div>
      </div>
    </div>
  </>;
}