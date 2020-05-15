import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import { grey } from '@material-ui/core/colors';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import './styles.css';

const LoginForm = (props) => {
    const {
        loginError,
        isShowPassword,
        isFormDisabled,
        handleLoginClick,
        handleFieldChange,
        handleVisibilityClick
    } = props;
    const classes = useStyles();

    return (
        <div className="login-container">
            <CssBaseline />
            <div className={classes.paper}>
                <form noValidate>
                    {loginError
                        && <Alert severity="error" className={classes.alert}>
                            {loginError}
                        </Alert>}
                    <TextField
                        id="username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        disabled={isFormDisabled}
                        label="Username"
                        className={classes.form}
                        onChange={(event) => {
                            event.preventDefault();
                            handleFieldChange(event.target.value, event.target.id);
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        id="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Password"
                        type={isShowPassword ? 'text' : 'password'}
                        disabled={isFormDisabled}
                        onChange={(event) => {
                            event.preventDefault();
                            handleFieldChange(event.target.value, event.target.id);
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <IconButton onClick={handleVisibilityClick}>
                                    {
                                        isShowPassword
                                            ? <Visibility style={{ color: grey[900] }} />
                                            : <VisibilityOff style={{ color: grey[900] }} />
                                    }
                                </IconButton>
                            )
                        }}
                    />
                    <Button
                        display="none"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.form}
                        disabled={isFormDisabled}
                        onClick={(event) => {
                            event.preventDefault();
                            handleLoginClick();
                        }}
                    >
                        {isFormDisabled && <CircularProgress size={20} className={classes.circularProgress} />}
                        {'Sign In'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    loginError: PropTypes.string,
    isShowPassword: PropTypes.bool.isRequired,
    isFormDisabled: PropTypes.bool.isRequired,
    handleLoginClick: PropTypes.func.isRequired,
    handleFieldChange: PropTypes.func.isRequired,
    handleVisibilityClick: PropTypes.func.isRequired
};

export default LoginForm;