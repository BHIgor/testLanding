import { useState } from 'react';
import footerPhoto from './../../images/footerImg.png'
import captcha from './../../images/captcha.png'

import './Footer.scss';

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо ${formData.name}, мы свяжемся с Вами.`);
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: ''
    });
  };
  return <>
    <div className="container footer">
      <img src={footerPhoto} alt="Фото" className="footer__image" />

      <div className="footer__block1">
        <span className="footer__subTitle">
          Свяжитесь с нами
        </span>

        <span className="footer__title">
          Оставьте заявку на обратную связь
        </span>

        <form onSubmit={handleSubmit} className="footer__block">
          <input
            type='text'
            name='name'
            placeholder='Ваше имя'
            className='footer__input'
            onChange={handleChange}
            required
          />

          <input
            type='phone'
            name='phone'
            placeholder='Номер телефона'
            className='footer__input'
            onChange={handleChange}
            required
          />

          <div className="footer__captcha">
            <input type='checkbox' className="footer__captcha--checkbox" required />

            <span className="footer__captcha--text">
              I am not a robot
            </span>

            <div className="footer__captcha--iconBlock">
              <img src={captcha} alt="Фото" className="footer__captcha--icon" />

              <span className="footer__captcha--iconText">
                reCAPTCHA
              </span>

              <span className="footer__captcha--iconText">
                Privacy - Terms
              </span>
            </div>
          </div>

          <button type="submit" className="footer__button">
            Отправить
          </button>
        </form>
        <span className='footer__footerText'>Copyright 2019-2022 © Skyweb Co. Все права защищены.</span>
      </div>
    </div>

  </>;
}