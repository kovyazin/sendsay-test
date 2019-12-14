import React from 'react';

import './Form.css';

const Form = (props) => {
  return (
    <form className="form">
      <div className="form-title">Отправлялка сообщений</div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="" className="field-label">От кого</label>
          <input type="text" className="field-text field-input" placeholder="Имя" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="field-label"></label>
          <input type="text" className="field-text field-input" placeholder="Email" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="" className="field-label">Кому</label>
          <input type="text" className="field-text field-input" placeholder="Имя" />
        </div>
        <div className="form-group">
          <label htmlFor="" className="field-label"></label>
          <input type="text" className="field-text field-input" placeholder="Email" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="" className="field-label">Тема письма</label>
          <input type="text" className="field-text field-input" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="" className="field-label">Сообщение</label>
          <textarea className="field-text field-textarea" />
          <div className="btn-file">Прикрепить файл</div>
        </div>
      </div>

      <button className="btn-send">Отправить</button>

    </form>
  )
}

export default Form;
