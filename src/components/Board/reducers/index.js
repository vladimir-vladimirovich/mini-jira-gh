import { combineReducers } from 'redux';
import taskbarReducer from './taskbar';
import tasksReducer from './tasks';

const boardReducers = combineReducers({
    taskbarReducer,
    tasksReducer
})

export default boardReducers;