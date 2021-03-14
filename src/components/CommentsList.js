import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'


const CommentsList = ({comments}) => {
  return (
  <>
  <div className="comments-list">
    <h2>Comments</h2>
    {(comments && comments.length !== 0) ? 
      comments.map((comment, key) => (
        <div className="comment-container" key={key}>
          <div id="left">
            <IoPersonSharp size={20} />
          </div>
          <div id="right">
            <h3>{comment.username}</h3>
            <p>{comment.text}</p>
          </div>
        </div>  
      ))
    : <p id="no-comments">People are yet to form an opinion...</p>}
  </div>
  </>)
}

export default CommentsList;