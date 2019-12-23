/* Import libraries */
import React from 'react';

/* Import styles */
import './ButtonUploadFile.css';

export const ButtonUploadFile = ({ getInputProps, isSubmitting }) => {
  return (
    <label htmlFor="btn-file" className="btn-file-label">
      Прикрепить файл
      <input
        type="file"
        name="btn-file"
        id="btn-file"
        className="btn-file"
        disabled={isSubmitting}
        {...getInputProps()} />
    </label>
  );
};

export default ButtonUploadFile;
