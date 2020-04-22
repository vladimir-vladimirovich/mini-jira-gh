import { combineReducers } from 'redux';
import taskbarReducer from './taskbar';
import tasksReducer from './tasks';
import filtersReducer from './filters';

const boardReducers = combineReducers({
    taskbarReducer,
    tasksReducer,
    filtersReducer
});

export default boardReducers;