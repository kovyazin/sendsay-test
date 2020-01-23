/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './ButtonUploadFile.module.css'

export const ButtonUploadFile = ({ getInputProps, isSubmitting }) => {
  return (
    <label htmlFor="btn-file" className={styles.btnLabel}>
      Прикрепить файл
      <input
        type="file"
        name="btn-file"
        id="btn-file"
        className={styles.btnFile}
        disabled={isSubmitting}
        {...getInputProps()}
      />
    </label>
  )
}

export default ButtonUploadFile
