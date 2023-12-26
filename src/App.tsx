import React from 'react';
import Landing from './pages/landing';
import Nav from './pages/nav';
import Dashboard from './pages/dashboard';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import Signup from './components/auth/signup';

function App() {
  return (
    <div className="">
      <header className="">
        <Nav />
      </header>

      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/register" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
