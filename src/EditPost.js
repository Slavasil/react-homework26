import { useRef, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useJsonFetch from "./hooks/useJsonFetch";
import PostEditForm from './PostEditForm';

function EditPost() {
  let parameters = useParams();
  let navigate = useNavigate();
  const contentAreaRef = useRef();
  let postsFetch = useJsonFetch(process.env.REACT_APP_API_SERVER+'/posts');

  function handleSubmitClick() {
    let request;
    request = new Request(process.env.REACT_APP_API_SERVER+'/posts', {
      method: 'POST',
      body: JSON.stringify({id: parseInt(parameters.id), content: contentAreaRef.current.value}),
      headers: [['Content-Type', 'application/json']]
    });
    fetch(request).then(response => {
      if (response.ok) {
        navigate('/');
      }
    });
  }
  function handleCloseClick() {
    navigate('/');
  }
  if (postsFetch[1] == true) {
    return null;
  }
  let originalPostText = postsFetch[0].find(post => post.id == parameters.id).content;
  return <PostEditForm contentAreaRef={contentAreaRef} originalPostText={originalPostText} onSubmit={handleSubmitClick} onClose={handleCloseClick}/>;
}
export default EditPost;