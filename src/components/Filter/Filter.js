import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({filter, changeFilter}) => {
    return (
        <>
            <input
            type="text"
            title='Посик по имени'
            value={filter}
            onChange={changeFilter}
          />
        </>
    );
};

Filter.propTypes = {
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
};

export default Filter;