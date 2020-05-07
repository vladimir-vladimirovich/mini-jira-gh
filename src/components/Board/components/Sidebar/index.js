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
        const { isLoading, isVisible, task } = this.props;

        return (
            <div>
                <Sidebar
                    closeSidebar={this.closeSidebar}
                    isVisible={isVisible}
                    isLoading={isLoading}
                    task={task}
                />
            </div>
        );
    }
}

SidebarContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired
};

const enhance = connect((state) => ({
    isVisible: selectors.getVisibilityStatus(state),
    isLoading: selectors.getSidebarLoading(state),
    task: selectors.getSidebarTask(state)
}));

export default enhance(SidebarContainer);