import { combineReducers } from 'redux';
import authUsers from '../reducers/authUser';
import questions from '../reducers/questions';
import users from '../reducers/users';

export default combineReducers({
    authUsers,
    questions,
    users
});