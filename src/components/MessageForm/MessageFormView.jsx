/* Import libraries */
import React from 'react'

/* Import components */
import TextArea from './TextArea/TextArea'
import TextInput from './TextInput/TextInput'
import ButtonUploadFile from './ButtonUploadFile/ButtonUploadFile'
import AttachedFiles from './AttachedFiles/AttachedFiles'
import DragndropZone from './DragndropZone/DragndropZone'

/* Import styles */
import styles from './MessageForm.module.css'

const MessageFormView = ({
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
    <form className={styles.form} onSubmit={handleSubmit} {...getRootProps()}>
      <div className={styles.title}>Отправлялка сообщений</div>
      <div className={styles.row}>
        <div className={styles.group}>
          <TextInput
            label="От кого"
            name="fromName"
            type="text"
            placeholder="Имя"
            position="left"
            isSubmitting={isSubmitting}
          />
        </div>
        <div className={styles.group}>
          <TextInput
            name="fromEmail"
            type="text"
            placeholder="Email"
            position="right"
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <TextInput
            label="Кому"
            name="toName"
            type="text"
            placeholder="Имя"
            position="left"
            isSubmitting={isSubmitting}
          />
        </div>
        <div className={styles.group}>
          <TextInput
            name="toEmail"
            type="text"
            placeholder="Email"
            position="right"
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <TextInput
            label="Тема письма"
            name="subject"
            type="text"
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.group}>
          <TextArea
            label="Сообщение"
            name="message"
            type="text"
            isSubmitting={isSubmitting}
          />
          {!!attachedFiles.length && (
            <AttachedFiles
              attachedFiles={attachedFiles}
              removeAttachedFile={removeAttachedFile}
              isSubmitting={isSubmitting}
            />
          )}
          <ButtonUploadFile
            getInputProps={getInputProps}
            isSubmitting={isSubmitting}
          />
          {filesError && <span className={styles.warning}>{filesError}</span>}
        </div>
      </div>

      <button type="submit" className={styles.btnSend} disabled={isSubmitting}>
        Отправить
      </button>

      <DragndropZone isDragActive={isDragActive} />
    </form>
  )
}

export default MessageFormView
