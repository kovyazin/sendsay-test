/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './DragndropZone.module.css'

const DragndropZone = ({ isDragActive }) => {
  return (
    <div
      className={`${styles.dragndropZone} ${isDragActive ? styles.active : ''}`}
    >
      <div className={styles.title}>Бросайте файлы сюда, я ловлю</div>
      <div className={styles.text}>
        Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и
        zip-архивы. Размеры файла до 5 МБ
      </div>
    </div>
  )
}

export default DragndropZone
