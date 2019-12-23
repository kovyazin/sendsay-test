/* Import libraries */
import React from 'react';

/* Import components */
import TextArea from './TextArea/TextArea';
import TextInput from './TextInput/TextInput';
import ButtonUploadFile from './ButtonUploadFile/ButtonUploadFile';
import AttachedFiles from "./AttachedFiles/AttachedFiles";

/* Import styles */
import './MessageForm.css';

const MessageForm = ({
  isSubmitting,
  handleSubmit,
  attachedFiles,
  getRootProps,
  getInputProps,
  isDragActive,
  removeAttachedFile,
  filesError
}) => {
  return (
    <form className="form" onSubmit={handleSubmit} {...getRootProps()} >
      <div className="form-title">Отправлялка сообщений</div>
      <div className="form-row">
        <div className="form-group">
          <TextInput
            label="От кого"
            name="fromName"
            type="text"
            placeholder="Имя"
            position="left"
          />
        </div>
        <div className="form-group">
          <TextInput
            name="fromEmail"
            type="text"
            placeholder="Email"
            position="right" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <TextInput
            label="Кому"
            name="toName"
            type="text"
            placeholder="Имя"
            position="left"
          />
        </div>
        <div className="form-group">
          <TextInput
            name="toEmail"
            type="text"
            placeholder="Email"
            position="right" />
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
          {
            !!attachedFiles.length && (
              <AttachedFiles
                attachedFiles={attachedFiles}
                removeAttachedFile={removeAttachedFile} />
              )
          }
          <ButtonUploadFile
            getInputProps={getInputProps} />
          {filesError && <div>{filesError}</div>}
        </div>
      </div>

      <button type="submit" className="btn-send" disabled={isSubmitting}>
        Отправить
      </button>

      <div className={`dragndrop-zone ${isDragActive ? 'active' : ''}`}>
        <div className="dragndrop-zone-title">Бросайте файлы сюда, я ловлю</div>
        <div className="dragndrop-zone-text">
          Мы принимаем картинки (jpg, png, gif), офисные файлы
          (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ
        </div>
      </div>

    </form>
  );
};

export default MessageForm;
