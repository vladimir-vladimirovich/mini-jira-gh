import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import '../../css/Filters.css';

const Sidebar = (props) => {
    const { closeSidebar, isOpened, taskData, isLoading } = props;

    return (
        <div>
            <Drawer anchor="right" open={isOpened} onClose={closeSidebar}>
                <div>
                    {isLoading
                        ? 'LOADING ... ... !!!1'
                        : `Description: ${taskData.description}`}
                </div>
            </Drawer>
        </div>
    );
};

Sidebar.propTypes = {
    closeSidebar: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    taskData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Sidebar;