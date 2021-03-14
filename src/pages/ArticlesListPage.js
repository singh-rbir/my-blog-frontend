import React from 'react';
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList';

const ArticleListPage = () => {

  return (
  <>
    <h1>All articles</h1>
    <ArticlesList articles={articleContent}/>

  </>
  )


}

export default ArticleListPage;