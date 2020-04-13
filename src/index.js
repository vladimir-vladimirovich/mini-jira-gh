import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardContainer from './components/Board/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import boardReducers from './components/Board/reducers/index'

const boardStore = createStore(
  boardReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={boardStore}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root')
);