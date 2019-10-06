import React from 'react';
import PropTypes from 'prop-types';

const TripDate = props => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleDateEdits} />
    );
  }

  return (
    <span>
      {props.children}
    </span>
  );
};

TripDate.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleDateEdits: PropTypes.func.isRequired
};

export default TripDate;