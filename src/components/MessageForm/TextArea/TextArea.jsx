/* Import libraries */
import React from 'react';
import { useField } from 'formik';

/* Import styles */
import styles from './TextArea.module.css';

const TextArea = ({ label, component, isSubmitting, ...props }) => {
  const { id, name } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={id || name} className={styles.label}>
        {label}
      </label>
      <textarea
        className={styles.field}
        disabled={isSubmitting}
        {...field}
        {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.warning}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextArea;
