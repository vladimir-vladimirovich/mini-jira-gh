import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Filters.css';

const Search = (props) => {
    const { onChange } = props;

    return (
        <input type="text" className="quick-search" onChange={onChange} placeholder="Search..." />
    );
};

Search.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Search;