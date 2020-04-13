import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import { fakeServerUtil } from '../../utils/fakeServer.util';
import * as actions from './actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as selectors from './selectors';

class BoardContainer extends React.Component {
    componentDidMount() {
        this.updateTaskbar();
    }

    async updateTaskbar() {
        const { updateTaskbar } = this.props;
        let taskbarData = await fakeServerUtil.getTaskbarConfig();
        updateTaskbar(taskbarData);
    }

    render() {
        const { columnNames } = this.props;
        return (
            <Board columnNames={columnNames} />
        )
    }
}

BoardContainer.propTypes = {
    columnNames: PropTypes.array.isRequired
}

const enhance = compose(
    connect(
        state => ({
            columnNames: selectors.getColumnNames(state)
        }),
        dispatch => ({
            updateTaskbar: (taskbar) => {
                dispatch(actions.updateTaskbar(taskbar))
            }
        })
    )
)

export default enhance(BoardContainer)