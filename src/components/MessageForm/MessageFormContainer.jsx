/* Import libraries */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';

/* Import action creators */
import { sendMessage } from '../../actionCreators/form';
import { showThanksgivingMessage } from '../../actionCreators/thanksgivingMessage';

/* Import components */
import MessageForm from './MessageForm';

/* Import services */
import toBase64 from '../../services/toBase64';

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
  subject: '',
  fromName: '',
  fromEmail: '',
  toName: '',
  message: '',
  mca: '',
  attaches: []
};

const MessageFormContainer = props => {
  const [fileLoadingError, setFileLoadingError] = useState(null);

  const handleUploadFile = async (files, attaches, setFieldValue) => {
    const content = await toBase64(files[0]).catch(e => e);
    if (content instanceof Error) {
      setFileLoadingError({ hasError: true, errorMessage: content.message });
      return;
    }

    setFieldValue('attaches', [
      ...attaches,
      {
        name: files[0].name,
        content,
        encoding: 'base64',
        id: Date.now()
      }
    ]);
  };

  return (
    <MessageForm
      fileLoadingError={fileLoadingError}
      validationSchema={validationSchema}
      handleUploadFile={handleUploadFile}
      initialValues={initialValues}
      {...props}
    />
  );
};

// const mapStateToProps = ({ thanksgivingMessage: { email } }) => ({
//   email
// });

export default connect(() => ({}), { sendMessage, showThanksgivingMessage })(
  MessageFormContainer
);
