import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

import '../../css/Sidebar.css';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    medium: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    textStyles: {
        fontWeight: 'bold'
    }
}));

const Sidebar = (props) => {
    const {
        closeSidebar,
        isVisible,
        task,
        statuses,
        priorities,
        projects,
        employees,
        handleStatusChange,
        handlePriorityChange,
        handleProjectChange,
        handleAssigneeChange,
        handleSummaryChange,
        handleDescriptionChange
    } = props;
    const classes = useStyles();

    return (
        <div>
            <Drawer anchor="right" open={isVisible} onClose={closeSidebar}>
                <div className="sidebar">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-basic"
                                defaultValue={task.summary}
                                label={task.id}
                                onChange={(event) => handleSummaryChange(event.target.value, task.id)}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src="https://image.flaticon.com/icons/png/512/2628/2628496.png"
                                                className={classes.medium}
                                            />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                value={task.status}
                                onChange={(event) => handleStatusChange(event, task.id)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{'Status:'}</InputAdornment>
                                }}
                            >
                                {statuses.map((status) => (
                                    <MenuItem key={status} value={status}>
                                        {status}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                value={task.assignee}
                                onChange={(event) => handleAssigneeChange(event, task.id)}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        {'Assignee:'}
                                        <Avatar alt="Remy Sharp" src={task.img} className={classes.small} />
                                    </InputAdornment>)
                                }}
                            >
                                {employees.map((employee) => (
                                    <MenuItem key={employee.name} value={employee.name}>
                                        {employee.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                value={task.priority}
                                onChange={(event) => handlePriorityChange(event, task.id)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{'Priority:'}</InputAdornment>
                                }}
                            >
                                {priorities.map((priority) => (
                                    <MenuItem key={priority} value={priority}>
                                        {priority}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                value={task.project}
                                onChange={(event) => handleProjectChange(event, task.id)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{'Project:'}</InputAdornment>
                                }}
                            >
                                {projects.map((project) => (
                                    <MenuItem key={project} value={project}>
                                        {project}
                                    </MenuItem>
                                ))}

                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                onChange={(event) => handleDescriptionChange(event.target.value, task.id)}
                                multiline
                                fullWidth
                                defaultValue={task.description}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
        </div>
    );
};

Sidebar.propTypes = {
    closeSidebar: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    isVisible: PropTypes.bool.isRequired,
    statuses: PropTypes.array.isRequired,
    priorities: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    handleStatusChange: PropTypes.func.isRequired,
    handlePriorityChange: PropTypes.func.isRequired,
    handleProjectChange: PropTypes.func.isRequired,
    handleAssigneeChange: PropTypes.func.isRequired,
    handleSummaryChange: PropTypes.func.isRequired,
    handleDescriptionChange: PropTypes.func.isRequired
};

export default Sidebar;