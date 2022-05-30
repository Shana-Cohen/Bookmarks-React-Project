import React, { Component } from 'react';
import { Route } from 'react-router';
import { UserContextComponent } from './AuthContext';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyBookmarks from './pages/MyBookmarks';
import Logout from './pages/Logout';
import AddBookmark from './pages/AddBookmark';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <UserContextComponent>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <PrivateRoute exact path='/addbookmark' component={AddBookmark} />
          <PrivateRoute exact path='/mybookmarks' component={MyBookmarks} />
        </Layout>
      </UserContextComponent>
    );
  }
}