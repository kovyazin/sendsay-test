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
  attaches
}) => {
  return (
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
          <AttachedFiles attaches={attaches} />
          <ButtonUploadFile attaches={attaches} />
        </div>
      </div>

      <button type="submit" className="btn-send" disabled={isSubmitting}>
        Отправить
      </button>
    </form>
  );
};

export default MessageForm;
