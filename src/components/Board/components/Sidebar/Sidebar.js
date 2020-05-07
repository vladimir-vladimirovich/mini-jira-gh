import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

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
    }
}));

const Sidebar = (props) => {
    const { closeSidebar, isVisible, task } = props;
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
                                disabled
                                defaultValue={task.status}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{'Status:'}</InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                disabled
                                defaultValue={task.assignee}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        {'Assignee:'}
                                        <Avatar alt="Remy Sharp" src={task.img} className={classes.small} />
                                    </InputAdornment>)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                disabled
                                defaultValue={task.priority}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{'Priority:'}</InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                disabled
                                defaultValue={task.project}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{'Project:'}</InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                fullWidth
                                // rows={4}
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
    isLoading: PropTypes.bool.isRequired
};

export default Sidebar;