import React from 'react';
import PropTypes from 'prop-types';
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

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextInput;
