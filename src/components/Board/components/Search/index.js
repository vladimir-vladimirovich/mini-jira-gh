import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import _ from 'underscore';
import * as actions from './actions';
import { connect } from 'react-redux';
import '../../css/Filters.css';

class SearchContainer extends React.Component {
    onChange = (value) => {
        const { dispatch } = this.props;

        dispatch(actions.setSearchQuery(value));
    }

    onChangeDebounced = _.debounce(this.onChange, 200);

    render() {
        return (
            <Search onChange={this.onChangeDebounced} />
        );
    }
}

SearchContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const enhance = connect();

export default enhance(SearchContainer);