import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import PostsList from './components/PostsList';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><h1>Reduxstagram</h1></Link>
      </header>
    
      <Switch>
        <Route path="/post/:id">
          <SinglePost />
        </Route>
        <Route path="/">
          <PostsList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;