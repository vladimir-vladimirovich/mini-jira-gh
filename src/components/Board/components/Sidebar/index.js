import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import _ from 'underscore';
import { connect } from 'react-redux';
import * as commonActions from '../../../actions/common.actions';
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

    handleAssigneeChange = (event, taskId) => {
        const { dispatch, employees } = this.props;
        const assignee = employees.find((employee) => employee.name === event.target.value);

        dispatch(commonActions.updateTask({
            id: taskId,
            assignee: event.target.value,
            img: assignee.avatar
        }));
    }

    _handleSummaryChange = (value, taskId) => {
        const { dispatch } = this.props;

        dispatch(commonActions.updateTask({ id: taskId, summary: value }));
    }

    _handleDescriptionChange = (value, taskId) => {
        const { dispatch } = this.props;

        dispatch(commonActions.updateTask({ id: taskId, description: value }));
    };

    handleSummaryChange = _.debounce(this._handleSummaryChange, 200);

    handleDescriptionChange = _.debounce(this._handleDescriptionChange, 200);

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
                    handleAssigneeChange={this.handleAssigneeChange}
                    handleSummaryChange={this.handleSummaryChange}
                    handleDescriptionChange={this.handleDescriptionChange}
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