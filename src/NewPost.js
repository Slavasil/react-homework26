import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostEditForm from "./PostEditForm";

function NewPost() {
  const navigate = useNavigate();
  const contentAreaRef = useRef();

  function handleSubmitClick() {
    let request;
    request = new Request(process.env.REACT_APP_API_SERVER+'/posts', {
      method: 'POST',
      body: JSON.stringify({id: 0, content: contentAreaRef.current.value}),
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
  return <PostEditForm isNew contentAreaRef={contentAreaRef} onSubmit={handleSubmitClick} onClose={handleCloseClick}/>;
}

export default NewPost;