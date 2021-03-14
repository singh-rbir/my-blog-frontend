import React from 'react';
import {Link} from 'react-router-dom'

const ArticlesList = ({articles}) => {
    return (
      <>
      {articles.map((article, key) => (
        <Link to={`/article/${article.name}`} style={{textDecoration: 'none'}} key={key}>
          <div className="article-list-item link">
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </div>
        </Link>
      ))}
      </>
    )
}




export default ArticlesList;