import { combineReducers } from 'redux';

import board from './reducers/board';
import authorization from './reducers/authorization';

export default combineReducers({
    board,
    authorization
});
