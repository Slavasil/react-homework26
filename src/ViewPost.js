import { useState } from 'react';
import { useParams } from "react-router-dom";
import useJsonFetch from "./hooks/useJsonFetch";
import Post from "./Post";

function ViewPost(props) {
  const postId = useParams().id;
  const [state, setState] = useState({post: null, error: false, loading: false});
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_API_SERVER+'/posts');

  if (loading) {
    return <div>Загрузка содержимого</div>;
  } else if (error) {
    return <div>Произошла ошибка</div>;
  } else {
    const post = data.find(post => post.id == postId);
    return <Post withButtons id={post.id} content={post.content} created={post.created}/>;
  }
}

export default ViewPost;