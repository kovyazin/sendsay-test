/* Import libraries */
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

/* Import action creators */
import { sendMessage } from '../../actionCreators/form';
import { showThanksgivingMessage } from '../../actionCreators/thanksgivingMessage';

/* Import components */
import MessageForm from './MessageForm';
import { Formik } from "formik";

const validationSchema = Yup.object({
  fromName: Yup.string().required('Имя не может быть пустым'),
  fromEmail: Yup.string()
    .email('Введите корректный Email')
    .required('Email не может быть пустым'),
  toName: Yup.string().required('Имя не может быть пустым'),
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
});

const initialValues = {
  fromName: '',
  fromEmail: '',
  toName: '',
  toEmail: '',
  subject: '',
  message: '',
  attaches: []
};

const MessageFormContainer = ({ sendMessage, showThanksgivingMessage }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        sendMessage(values).then(() => {
          setSubmitting(false);
          resetForm();
          showThanksgivingMessage(values.mca);
        });
      }}
    >
      {({ isSubmitting, handleSubmit, values: { attaches }}) => (
        <MessageForm
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          attaches={attaches} />
        )}
    </Formik>
  );
};

export default connect(() => ({}), { sendMessage, showThanksgivingMessage })(
  MessageFormContainer
);
