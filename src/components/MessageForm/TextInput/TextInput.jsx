/* Import libraries */
import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const { id, name } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={id || name} className="field-label">
        {label}
      </label>
      <input className="field-text field-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-warning">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
