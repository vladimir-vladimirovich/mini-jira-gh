import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import './styles.css';

const LoginForm = (props) => {
    const {
        handleFieldChange,
        handleLoginClick,
        isFormDisabled,
        loginError
    } = props;
    const classes = useStyles();

    return (
        <div className="login-container">
            <Container component="div" maxWidth="xs" className={classes.container}>
                <CssBaseline />
                <div className={classes.paper}>
                    <form noValidate>
                        {loginError && <Alert variant="filled" severity="error">
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
                            type="password"
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
            </Container>
        </div>
    );
};

LoginForm.propTypes = {
    handleFieldChange: PropTypes.func.isRequired,
    handleLoginClick: PropTypes.func.isRequired,
    isFormDisabled: PropTypes.bool.isRequired,
    loginError: PropTypes.string
};

export default LoginForm;