/* Import libraries */
import React from 'react';
import { useField } from 'formik';

/* Import styles */
import styles from './TextInput.module.css';

const TextInput = ({ label, position, isSubmitting, ...props }) => {
  const { id, name } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={id || name} className={styles.label}>
        {label}
      </label>
      <input
        className={`${styles.field} ${position ? styles[position] : ''}`}
        disabled={isSubmitting}
        {...field}
        {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.warning}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
