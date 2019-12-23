/* Import libraries */
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {useDropzone} from "react-dropzone";

/* Import action creators */
import {
  sendMessage, addAttachedFile,
  cleanAttachedFiles, removeAttachedFile,
  setFilesError
} from '../../actionCreators/form';
import {showThanksgivingMessage} from '../../actionCreators/thanksgivingMessage';

/* Import components */
import MessageForm from './MessageForm';
import {Formik} from "formik";

const validationSchema = Yup.object({
  fromName: Yup.string().required('Имя не может быть пустым'),
  fromEmail: Yup.string()
    .email('Введите корректный Email')
    .required('Email не может быть пустым'),
  toName: Yup.string().required('Имя не может быть пустым'),
  toEmail: Yup.string()
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
  message: ''
};

const MessageFormContainer = ({ sendMessage,
                                showThanksgivingMessage,
                                attachedFiles,
                                addAttachedFile,
                                cleanAttachedFiles,
                                removeAttachedFile,
                                setFilesError,
                                filesError }) => {

  const _maxSize = 5000000;
  const _maxTotalSize = 20000000;

  const onDrop = useCallback((acceptedFiles) => {


    if (acceptedFiles.reduce((sum, { size }) => size + sum, 0)
        + attachedFiles.reduce((sum, { size }) => size + sum, 0)
        > _maxTotalSize) {
      setFilesError(`Общий размер файлов не должен превышать ${_maxTotalSize / 1000000} МБ`);
      return;
    }

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const {name: currentName, size: currentSize} = file;
        const totalSize = attachedFiles.reduce((sum, { size }) => sum + size, currentSize);

        if (!attachedFiles.some(({ name }) => name === currentName) && totalSize < _maxTotalSize) {
          addAttachedFile(currentName, reader.result, currentSize);
        }
        if (totalSize > _maxTotalSize) {
          setFilesError(`Общий размер файлов не должен превышать ${_maxTotalSize / 1000000} МБ`)
        }
      };
      reader.readAsDataURL(file);
    });

  }, [attachedFiles, setFilesError, addAttachedFile]);

  const onDropRejected = useCallback((rejectedFiles) => {
    rejectedFiles.forEach(({ size }) => {
      if (size > _maxSize) {
        setFilesError(`Максимальный размер одного файла не должен превышать ${_maxSize / 1000000} МБ`);
      } else {
        setFilesError('Произошла ошибка загрузки файла');
      }
    });
  }, [setFilesError]);

  const {
    getRootProps,
    getInputProps,
    isDragActive} = useDropzone({onDrop, onDropRejected, noClick: true, maxSize: _maxSize});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        sendMessage({...values, attaches: attachedFiles}).then(() => {
          setSubmitting(false);
          resetForm();
          cleanAttachedFiles();
          setFilesError(null);
          showThanksgivingMessage(values.toEmail);
        });
      }}
    >
      {({isSubmitting, handleSubmit}) => (
        <MessageForm
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          attachedFiles={attachedFiles}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
          removeAttachedFile={removeAttachedFile}
          filesError={filesError} />
      )}
    </Formik>
  );
};

const mapStateToProps = ({form: {attachedFiles, filesError }}) => ({
  attachedFiles,
  filesError
});

export default connect(mapStateToProps,
  {
    sendMessage,
    showThanksgivingMessage,
    addAttachedFile,
    removeAttachedFile,
    cleanAttachedFiles,
    setFilesError
  })(MessageFormContainer);
