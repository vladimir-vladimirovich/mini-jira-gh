import React from 'react';
import Board from './Board';
import { fakeServerUtil } from '../../utils/fakeServer.util';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import boardReducers from './reducers/index';
import { updateTaskbar } from './actions/index';

const store = createStore(boardReducers);

export default class BoardContainer extends React.Component {
    componentDidMount() {
        this.updateTaskbar();
    }

    async updateTaskbar() {
        let taskbarData = await fakeServerUtil.getTaskbarConfig();
        store.dispatch(updateTaskbar(taskbarData));
    }

    render() {
        return (
            <Provider store={store}>
                <Board />
            </Provider>
        )
    }
}