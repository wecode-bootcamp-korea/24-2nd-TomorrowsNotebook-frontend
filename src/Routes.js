import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import MyBooks from './pages/MyBooks/MyBooks';
import Detail from './pages/Detail/Detail';
import Viewer from './pages/Viewer/Viewer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/mybooks" component={MyBooks} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/viewer/:id" component={Viewer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
