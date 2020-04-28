import React from 'react';
import Search from './Search';
import * as actions from './actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/Filters.css';

class SearchContainer extends React.Component {
    onChange = (event) => {
        const { dispatch } = this.props;

        dispatch(actions.setSearchQuery(event.target.value));
    }

    render() {
        return (
            <Search onChange={this.onChange} />
        );
    }
}

SearchContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const enhance = connect();

export default enhance(SearchContainer);