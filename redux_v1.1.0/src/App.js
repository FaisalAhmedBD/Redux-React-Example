import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './userList';
import UserDetails from './user_details'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React & Redux</h1>
                </header>
                <div>
                    <h2>User List</h2>
                    <UserList/>
                    <hr/>
                    <h2>User Details</h2>
                    <UserDetails/>
                </div>


            </div>
        );
    }
}

export default App;
