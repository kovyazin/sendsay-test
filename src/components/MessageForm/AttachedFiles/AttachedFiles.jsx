/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './AttachedFiles.module.css'

const AttachedFiles = ({ attachedFiles, removeAttachedFile, isSubmitting }) => {
  return (
    <div className={styles.attachedFiles}>
      {attachedFiles.map(({ name }) => {
        return (
          <div className={styles.file} key={name}>
            <div className={styles.fileName}>{name}</div>
            <button
              type="button"
              className={styles.btnDelete}
              disabled={isSubmitting}
              onClick={() => removeAttachedFile(name)}
            >
              Удалить
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default AttachedFiles
