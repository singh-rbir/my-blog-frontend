import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.scss';
import Navbar from './Navbar';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>  {/* makes sure that only one component is displayed. */}
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />  {/* Has to be at the last */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
