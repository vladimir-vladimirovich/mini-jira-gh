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

    handleStatusChange = (event, taskId) => {
        const { dispatch } = this.props;

        dispatch(commonActions.updateTask({ id: taskId, status: event.target.value }));
    }

    handlePriorityChange = (event, taskId) => {
        const { dispatch } = this.props;

        dispatch(commonActions.updateTask({ id: taskId, priority: event.target.value }));
    }

    handleProjectChange = (event, taskId) => {
        const { dispatch } = this.props;

        dispatch(commonActions.updateTask({ id: taskId, project: event.target.value }));
    }

    render() {
        const {
            isVisible,
            task,
            statuses,
            priorities,
            projects,
            employees
        } = this.props;

        return (
            <div>
                <Sidebar
                    closeSidebar={this.closeSidebar}
                    isVisible={isVisible}
                    task={task}
                    statuses={statuses}
                    priorities={priorities}
                    projects={projects}
                    employees={employees}
                    handleStatusChange={this.handleStatusChange}
                    handlePriorityChange={this.handlePriorityChange}
                    handleProjectChange={this.handleProjectChange}
                />
            </div>
        );
    }
}

SidebarContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    statuses: PropTypes.array.isRequired,
    priorities: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired
};

const enhance = connect((state) => ({
    isVisible: selectors.getVisibilityStatus(state),
    task: selectors.getSidebarTask(state),
    statuses: selectors.getStatuses(state),
    priorities: selectors.getPriorities(state),
    projects: selectors.getProjects(state),
    employees: selectors.getEmployees(state)
}));

export default enhance(SidebarContainer);