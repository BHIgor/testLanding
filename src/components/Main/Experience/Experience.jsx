
import './Experience.scss';

export const Experience = () => {

  return <>
    <div className="container exprnc">
      <span className="exprnc__title">
        Более 6 лет опыта в сфере IT
      </span>

      <div className="exprnc__flex">
        <div className="exprnc__block">
          <div className="exprnc__block--icon exprnc__block--iconYears"></div>
          <div className="exprnc__textBlock">
            <span className="exprnc__textBlock--title">
              6+
            </span>

            <span className="exprnc__textBlock--text">
              Лет в разработке
            </span>
          </div>
        </div>

        <div className="exprnc__block">
          <div className="exprnc__block--icon exprnc__block--iconProject"></div>
          <div className="exprnc__textBlock">
            <span className="exprnc__textBlock--title">
              150+
            </span>

            <span className="exprnc__textBlock--text">
            Выполненных проектов
            </span>
          </div>
        </div>

        <div className="exprnc__block">
          <div className="exprnc__block--icon exprnc__block--iconSmile"></div>
          <div className="exprnc__textBlock">
            <span className="exprnc__textBlock--title">
              200+
            </span>

            <span className="exprnc__textBlock--text">
             Довольных клиентов
            </span>
          </div>
        </div>

        <div className="exprnc__block">
          <div className="exprnc__block--icon exprnc__block--iconStaff"></div>
          <div className="exprnc__textBlock">
            <span className="exprnc__textBlock--title">
              40+
            </span>

            <span className="exprnc__textBlock--text">
             Сотрудников
            </span>
          </div>
        </div>
      </div>
    </div>
  </>;
}