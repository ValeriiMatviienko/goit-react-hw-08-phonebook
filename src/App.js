import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Appbar from './components/Appbar/Appbar';
import Login from './views/Login/Login';
import HomeView from './views/HomeView/HomeView';
import Signup from './views/Signup/Signup';
import Contacts from './views/Contacts/Contacts';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import authOperations from './redux/auth/auth-operations';


class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Appbar />
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/signup"
            restricted
            redirectTo="/phonebook"
            component={Signup}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/phonebook"
            component={Login}
          />
          <PrivateRoute
            path="/phonebook"
            redirectTo="/login"
            component={Contacts}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
