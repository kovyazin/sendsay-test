import React from "react";

const AttachedFiles = ({ attaches }) => {
  return (
    <div className="attached-files">
      {attaches.map(({ name }) => (
        <div className="attached-files-item">
          <div className="attached-files-file-name">{name}</div>
            <button
              type="button"
              className="attached-files-btn-delete">
              Удалить
            </button>
        </div>
      ))}
    </div>
  );
};

export default AttachedFiles;