/* Import libraries */
import React from 'react';

/* Import styles */
import './ButtonUploadFile.css';

export const ButtonUploadFile = ({
  fileLoadingError,
  handleUploadFile,
  attaches,
  setFieldValue
}) => {
  return (
    <label htmlFor="btn-file" className="btn-file-label">
      Прикрепить файл
      {fileLoadingError && (
        <span className="error-file-message">
          {fileLoadingError.errorMessage}
        </span>
      )}
      <input
        type="file"
        name="btn-file"
        id="btn-file"
        className="btn-file"
        onChange={({ currentTarget: { files } }) => {
          handleUploadFile(files, attaches, setFieldValue);
        }}
      />
    </label>
  );
};

export default ButtonUploadFile;
