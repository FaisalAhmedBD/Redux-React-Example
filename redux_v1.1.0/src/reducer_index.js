import {combineReducers} from 'redux';
import UserReducers from './reducer-users';
import ActiveUserReducer from './active-user-reducer'

const AllReducers = combineReducers({

    users: UserReducers,
    activeUser: ActiveUserReducer
})
export default AllReducers;