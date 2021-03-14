import React from 'react'
import { IoThumbsDownOutline, IoThumbsUpOutline } from 'react-icons/io5';

const UpvotesSection = ({articleName, upvotes, downvotes, setArticleInfo}) => {
  
  const upvoteArticle = async() => {
    const result = await fetch (`/api/articles/${articleName}/upvote`, {
      method: 'post'
    })
    const body = await result.json();
    console.log({body});
    setArticleInfo(body);
    // document.getElementById('upvote-btn').style = "color: black; font-size: 3rem;";
  }

  const downvoteArticle = async() => {
    const result = await fetch(`/api/articles/${articleName}/downvote`, {
      method: 'post'
    })
    const body = await result.json();
    console.log({body});
    setArticleInfo(body);
  }
  
  
  return (
    <div id="upvotes-section">
      <span>
        <div className="upvote-btn link"><IoThumbsUpOutline onClick={upvoteArticle} /></div>
        <p id="upvote-info">{upvotes} ups</p>
      </span>
      <span>
        <div className="upvote-btn link"><IoThumbsDownOutline onClick={downvoteArticle} /></div>
        <p id="upvote-info">{downvotes} downs</p>
      </span>
    </div>
  )
}

export default UpvotesSection;