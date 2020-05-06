import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import * as commonActions from '../../commonActions';
import * as selectors from './selectors';
import '../../css/Filters.css';

class SidebarContainer extends React.Component {
    closeSidebar = () => {
        const { dispatch } = this.props;

        dispatch(commonActions.setSidebarVisibility(false));
    }

    render() {
        const { isLoading, isOpened, taskData } = this.props;

        return (
            <div>
                <Sidebar
                    closeSidebar={this.closeSidebar}
                    isOpened={isOpened}
                    isLoading={isLoading}
                    taskData={taskData}
                />
            </div>
        );
    }
}

SidebarContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    taskData: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
};

const enhance = connect((state) => ({
    isOpened: selectors.getSidebarStatus(state),
    taskData: selectors.getSidebarTaskData(state),
    isLoading: selectors.getSidebarLoading(state)
}));

export default enhance(SidebarContainer);