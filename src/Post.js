import { useNavigate } from "react-router-dom";

function Post(props) {
  const {id, content, created, onClick, withButtons} = props;
  const navigate = useNavigate();
  
  function handleEditClick() {
    navigate('/posts/'+id+'/edit');
  }
  function handleDeleteClick() {
    fetch(process.env.REACT_APP_API_SERVER+'/posts/'+id, {
      method: 'DELETE'
    }).then(() => navigate('/'));
  }

  return (
    <div className="post" onClick={onClick}>
      <div className="post-header">
        <img src="https://errors.slavasil.ml/error_icons/win95-explosive.png"/>
        <div>
          <div>Человек Молекула | {new Date(created).toLocaleDateString()}</div>
        </div>
      </div>
      <div className="post-content">
        {content}
      </div>
      {withButtons && <div className="post-button-block">
        <button onClick={handleEditClick}>Изменить</button>
        <button onClick={handleDeleteClick}>Удалить</button>
      </div>}
    </div>
  )
}

export default Post;