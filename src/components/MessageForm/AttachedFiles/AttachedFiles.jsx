import React from "react";

const AttachedFiles = ({ attachedFiles, removeAttachedFile, isSubmitting }) => {
  return (
    <div className="attached-files">
      {attachedFiles.map(({ name }) => {
        return (
        <div className="attached-files-item" key={name}>
          <div className="attached-files-file-name">{name}</div>
            <button
              type="button"
              className="attached-files-btn-delete"
              disabled={isSubmitting}
              onClick={() => removeAttachedFile(name)}>
              Удалить
            </button>
        </div>
      )})}
    </div>
  );
};

export default AttachedFiles;