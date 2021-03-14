import React, { useEffect, useState } from 'react';
import AddCommentForm from '../components/AddCommentForm';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList'
import UpvotesSection from '../components/UpvotesSection';
import articleContent from './article-content'
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) => {  // unique prop called "match"
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);
  const otherArticles = articleContent.filter(article => article.name !== name);  // get other articles who're not same as this article


  const [articleInfo, setArticleInfo] = useState({}); // use state, takes default value

  // useEffect is used to make the fetch calls to backend and setting the state with the result
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(`/api/articles/${name}`)
      console.log(result);
      const body = await result.json();   // get response body from result
      setArticleInfo(body);
    }
    fetchData();
  }, [name])  // add values to this array so useEffect only updates when that value changes
              // - it changes when the article in url changes


  if(!article){
    return <NotFoundPage />
  }
  
  return (
  <div className="article-page">
    <h1 id="article-title">{article.title}</h1>
    {article.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
    ))}

    <UpvotesSection articleName={articleInfo.name} upvotes={articleInfo.upvotes} downvotes={articleInfo.downvotes} setArticleInfo={setArticleInfo} />

    <AddCommentForm articleName={articleInfo.name} setArticleInfo={setArticleInfo} />

    <CommentsList comments={articleInfo.comments} />

    <div id="other-articles">
      <h1>Other articles you may like</h1>
      <ArticlesList articles={otherArticles}/>
    </div>

  </div>)

}

export default ArticlePage;