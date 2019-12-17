import React from 'react';
import { connect } from 'react-redux';
import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import { sendMessage, showThanksgivingMessage } from '../../reducers/reducer';

import './MessageForm.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="field-label">{label}</label>
      <input className="field-text field-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-warning">{meta.error}</div>
      ) : null}
    </>
  )
}

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="field-label">{label}</label>
      <textarea className="field-text field-textarea" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-warning">{meta.error}</div>
      ) : null}
    </>
  )
}

const MessageForm = ({ sendMessage, showThanksgivingMessage }) => {
  return (
    <Formik
      initialValues={{
        subject: '',
        fromName: '',
        fromEmail: '',
        toName: '',
        message: '',
        mca: ''
      }}
      validationSchema={Yup.object({
        fromName: Yup.string()
          .required('Имя не может быть пустым'),
        fromEmail: Yup.string()
          .email('Введите корректный Email')
          .required('Email не может быть пустым'),
        toName: Yup.string()
          .required('Имя не может быть пустым'),
        mca: Yup.string()
          .email('Введите корректный Email')
          .required('Email не может быть пустым'),
        subject: Yup.string()
          .max(30, 'Максимальная длина не должна превышать 30 символов')
          .min(10, 'Минимальная длина темы не может быть менее 10 символов')
          .required('Название темы не может быть пустой'),
        message: Yup.string()
          .max(500, 'Максимальная длина сообщения не должна превышать 500 символов')
          .min(30, 'Минимальная длина сообщения не может быть менее 30 символов')
          .required('Сообщение не может быть пустым')
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        sendMessage(values);
        setSubmitting(false);
        resetForm();
        showThanksgivingMessage();
      }}>
      {({ isSubmitting, handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">Отправлялка сообщений</div>
          <div className="form-row">
            <div className="form-group">
              <TextInput
                label="От кого"
                name="fromName"
                type="text"
                placeholder="Имя" />
            </div>
            <div className="form-group">
              <TextInput
                name="fromEmail"
                type="text"
                placeholder="Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <TextInput
                label="Кому"
                name="toName"
                type="text"
                placeholder="Имя" />
            </div>
            <div className="form-group">
              <TextInput
                name="mca"
                type="text"
                placeholder="Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <TextInput
                label="Тема письма"
                name="subject"
                type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <TextArea
                label="Сообщение"
                name="message"
                type="text" />
                <div className="attached-files">
                  <div className="attached-files-item">
                    <div className="attached-files-file-name">final666.jpg</div>
                    <button type="button" className="attached-files-btn-delete">Удалить</button>
                  </div>
                  <div className="attached-files-item">
                    <div className="attached-files-file-name">семантические ос...docx</div>
                    <button type="button" className="attached-files-btn-delete">Удалить</button>
                  </div>
                </div>
              <div className="btn-file">Прикрепить файл</div>
            </div>
          </div>

          <button type="submit" className="btn-send" disabled={isSubmitting}>Отправить</button>
        </form>
      )}
    </Formik>
  )
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { sendMessage, showThanksgivingMessage })(MessageForm);
