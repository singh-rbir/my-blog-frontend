import React, { useState } from 'react'
// import { BiCommentAdd } from 'react-icons/bi'
import {AiOutlineEnter} from 'react-icons/ai'

const AddCommentForm = ({articleName, setArticleInfo}) => {
  
  const [username, setUsername] = useState('');
  const [commentText, setCommentText] = useState('');
  
  const addComment = async() => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post', 
      body: JSON.stringify({username, text: commentText}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body = await result.json();
    console.log(body);
    setArticleInfo(body);
    setUsername(''); setCommentText('');
  }

  const onPressEnter = (e) =>{
    if(e.keyCode === 13 && e.shiftKey == false){
      e.preventDefault();
      addComment();
    }
  }


  return(
    <div id="add-comment-form">
      {/* <h3>Add a comment</h3> */}
        <input className="link" type="text" id="name" value={username} placeholder="Name" onChange={(event) => setUsername(event.target.value)} />
        <textarea className="link" value={commentText} rows="2" placeholder="Add a comment" onChange={(event) => setCommentText(event.target.value)} onKeyDown={(e) => onPressEnter(e)} wrap="soft" required />
        <button className="link" type="submit" id="submit" onClick={() => addComment()}>POST <AiOutlineEnter size={14} style={{fontWeight: 'bolder'}} alignmentBaseline={true}/></button>
    </div>
  )
  
}

export default AddCommentForm;