import React from 'react';
import './App.css';
import UsersTable from './Users/UsersTable';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../Router/history';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Switch>
            <Route path="/" exact render={(props)=> <UsersTable {...props}/> }/>
            <Route path="/adduser" render={(props)=> <AddUser {...props}/> }/>
            <Route path="/edituser/:userId" render={(props)=> <EditUser {...props}/> }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
