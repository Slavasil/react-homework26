import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

function PostList() {
  let [state, setState] = useState({posts: null, error: false, loading: true});
  let navigate = useNavigate();
  useEffect(() => {
    fetch(process.env.REACT_APP_API_SERVER+'/posts').then(async (response) => {
      if (response.ok) {
        try {
          let body = await response.json();
          console.log(body);
          setState(state => {return {...state, posts: body, error: false, loading: false}});
        } catch (e) {
          setState(state => {return {...state, error: true, loading: false}});
        }
      } else {
        setState(state => {return {...state, error: true, loading: false}});
      }
    }, () => {
      setState(state => {return {...state, error: true, loading: false}});
    });
  }, []);

  function handlePostClick(id) {
    navigate('/posts/'+id);
  }
  function renderPosts(posts) {
    return posts.map((post) => {
      console.log(post);
      return <Post key={post.id} onClick={()=>handlePostClick(post.id)} content={post.content} created={post.created}/>
    });
  }
  function handleCreatePost() {
    navigate('/posts/new');
  }
  return (
    <div>
      <button onClick={handleCreatePost}>Создать пост</button>
      {state.loading ? 'идет загрузка содержимого'
       : state.error ? 'произошла ошибка' : <div>{renderPosts(state.posts)}</div>}
    </div>
  );
}

export default PostList;