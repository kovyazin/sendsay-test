/* Import libraries */
import React from 'react';
import { Formik } from 'formik';

/* Import components */
import TextArea from './TextArea/TextArea';
import TextInput from './TextInput/TextInput';
import ButtonUploadFile from './ButtonUploadFile/ButtonUploadFile';

/* Import styles */
import './MessageForm.css';

const MessageForm = ({
  sendMessage,
  showThanksgivingMessage,
  fileLoadingError,
  validationSchema,
  handleUploadFile,
  initialValues
}) => {
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
      {({
        isSubmitting,
        handleSubmit,
        setFieldValue,
        values: { attaches }
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">Отправлялка сообщений</div>
          <div className="form-row">
            <div className="form-group">
              <TextInput
                label="От кого"
                name="fromName"
                type="text"
                placeholder="Имя"
              />
            </div>
            <div className="form-group">
              <TextInput name="fromEmail" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <TextInput
                label="Кому"
                name="toName"
                type="text"
                placeholder="Имя"
              />
            </div>
            <div className="form-group">
              <TextInput name="mca" type="text" placeholder="Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <TextInput label="Тема письма" name="subject" type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <TextArea label="Сообщение" name="message" type="text" />
              <div className="attached-files">
                {attaches.map(({ name, id }) => {
                  return (
                    <div className="attached-files-item" key={id}>
                      <div className="attached-files-file-name">{`${name}`}</div>
                      <button
                        type="button"
                        className="attached-files-btn-delete">
                        Удалить
                      </button>
                    </div>
                  )
                })}
              </div>

              <ButtonUploadFile
                fileLoadingError={fileLoadingError}
                handleUploadFile={handleUploadFile}
                attaches={attaches}
                setFieldValue={setFieldValue}
              />
            </div>
          </div>

          <button type="submit" className="btn-send" disabled={isSubmitting}>
            Отправить
          </button>
        </form>
      )}
    </Formik>
  );
};

export default MessageForm;
