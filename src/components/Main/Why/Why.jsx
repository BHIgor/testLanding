import whyPhoto from './../../../images/whyPhoto.png'

import './Why.scss';

export const Why = () => {

  const repeatCount = 6;
  const repeatedBlocks = Array.from({ length: repeatCount }).map((_, index) => (
    <div key={index} className="why__button">
      <div className="why__button--icon"></div>
      <span className="why__button--text">
        Приятные сотрудники
      </span>
    </div>
  ));

  return <>
    <div className="container why">
       <img src={whyPhoto} alt="Фото" className="why__image why__display" />
      <div className="why__info">
        <span className="why__info--title">
          Почему выбирают нас?
        </span>

        <span className="why__info--subTitle">
          Продвигайте свой бренд в интернете с современным IT решениями
        </span>

        <span className="why__info--text">
          Опытная веб студия Skyweb несёт полную ответсвенность за предоставляемые услуги и гарантирует следующие преимущества:
        </span>

        <div className="why__block">
         {repeatedBlocks}
        </div>

      </div>

      <img src={whyPhoto} alt="Фото" className="why__image" />
    </div>
  </>;
}