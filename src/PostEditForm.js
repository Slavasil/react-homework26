function PostEditForm({isNew, originalPostText, onSubmit, onClose, contentAreaRef}) {
  return (
    <div className="post-edit-form">
      <div className="post-edit-form-upper-spacer">
        <button className="post-edit-form-close-button" onClick={onClose}>X</button>
      </div>
      <div>
        <img className="post-edit-form-avatar" src="https://errors.slavasil.ml/error_icons/win95-explosive.png"/>
        <textarea className="post-edit-form-content" ref={contentAreaRef} defaultValue={isNew ? null : originalPostText}></textarea>
      </div>
      <div className="post-edit-form-button-block">
        <button onClick={onSubmit}>{isNew ? 'Опубликовать' : 'Сохранить'}</button>
      </div>
    </div>
  );
}

export default PostEditForm;