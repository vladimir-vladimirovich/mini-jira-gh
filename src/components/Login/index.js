import React from 'react';
import LoginForm from './Login';
import PropTypes from 'prop-types';
import _ from 'underscore';
import * as commonActions from '../actions/common.actions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fakeAuthServer } from '../../utils/fakeAuthServer.util';

class LoginFormContainer extends React.Component {
    username = '';

    password = '';

    state = {
        redirect: null,
        loginError: null,
        isShowPassword: false,
        isFormDisabled: false,
        alertVariant: 'filled'
    };

    handleFieldChange = (value, field) => {
        this[field] = value;
    }

    handleLoginClick = () => {
        const { dispatch } = this.props;

        this.toggleFormDisable(true);
        this.setState({ loginError: '' });
        fakeAuthServer.login(this.username, this.password)
            .then(() => {
                dispatch(commonActions.toggleLoggedIn(true));
                this.toggleFormDisable(false);
                this.setState({ redirect: '/mini-jira-gh/board' });
            })
            .catch((error) => {
                this.toggleFormDisable(false);
                this.setState({ loginError: error });
            });
    }

    handleLoginClickDebounced = _.debounce(this.handleLoginClick, 100);

    handleVisibilityClick = () => {
        const isShowPassword = this.state.isShowPassword;
        this.setState({ isShowPassword: !isShowPassword });
    }

    toggleFormDisable = (isFormDisabled) => {
        this.setState({ isFormDisabled });
    }

    render() {
        const {
            redirect,
            isFormDisabled,
            loginError,
            isShowPassword
        } = this.state;

        if (redirect) {
            return <Redirect to={this.state.redirect} />;
        }

        return (
            <LoginForm
                loginError={loginError}
                isShowPassword={isShowPassword}
                isFormDisabled={isFormDisabled}
                handleFieldChange={this.handleFieldChange}
                handleLoginClick={this.handleLoginClickDebounced}
                handleVisibilityClick={this.handleVisibilityClick}
            />
        );
    }
}

LoginFormContainer.propTypes = {
    dispatch: PropTypes.func
};

const enhance = connect();

export default enhance(LoginFormContainer);