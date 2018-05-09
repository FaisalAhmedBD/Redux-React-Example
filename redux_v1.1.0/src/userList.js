import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from './action_index';

class UserList extends Component {
    createListItems() {

        return (
            this.props.users.map((user) => {
                return (<li
                    onClick={()=>this.props.selectUser(user)}
                 //   onClick={this.props.selectUser(user)}
                    key={user.id} style={{ listStyleType: 'none'}}>{user.first} {user.last} </li>)
            })
        )

    }

    render() {
        return (


            <ul>
                {this.createListItems()}
            </ul>

        )
    }
}


const mapStateToProps = (state) => {

    return {
        users: state.users

    };
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);