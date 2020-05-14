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
        isFormDisabled: false,
        redirect: null,
        loginError: null
    };

    handleFieldChange = (value, field) => {
        this[field] = value;
    }

    handleLoginClick = () => {
        const { dispatch } = this.props;

        this.toggleFormDisable(true);
        fakeAuthServer.login(this.username, this.password)
            .then(() => {
                dispatch(commonActions.toggleLoggedIn(true));
                this.toggleFormDisable(false);
                this.setState({ redirect: '/board' });
            })
            .catch((error) => {
                this.toggleFormDisable(false);
                this.setState({ loginError: error });
            });
    }

    handleLoginClickDebounced = _.debounce(this.handleLoginClick, 100);

    toggleFormDisable = (isFormDisabled) => {
        this.setState({ isFormDisabled });
    }

    render() {
        const { redirect, isFormDisabled, loginError } = this.state;

        if (redirect) {
            return <Redirect to={this.state.redirect} />;
        }

        return (
            <LoginForm
                handleFieldChange={this.handleFieldChange}
                handleLoginClick={this.handleLoginClickDebounced}
                isFormDisabled={isFormDisabled}
                loginError={loginError}
            />
        );
    }
}

LoginFormContainer.propTypes = {
    dispatch: PropTypes.func
};

const enhance = connect();

export default enhance(LoginFormContainer);