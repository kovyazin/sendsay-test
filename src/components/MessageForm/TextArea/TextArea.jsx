/* Import libraries */
import React from 'react';
import { useField } from 'formik';

const TextArea = ({ label, component, isSubmitting, ...props }) => {
  const { id, name } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={id || name} className="field-label">
        {label}
      </label>
      <textarea
        className="field-text field-textarea"
        disabled={isSubmitting}
        {...field}
        {...props} />
      {meta.touched && meta.error ? (
        <div className="form-warning">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextArea;
