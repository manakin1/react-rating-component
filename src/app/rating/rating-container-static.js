import React from 'react';
import PropTypes from 'prop-types';
import RatingComponent from './rating-component';

const RatingContainerStatic = props => {
  return (
    <div className="c-rating-container c-rating-container--static">
      <div className="c-rating__inner">
        <p className="c-rating__label">Average rating:</p>

        <RatingComponent
          {...props}
          />
      </div>
    </div>
  );
};

RatingContainerStatic.propTypes = {
  display: PropTypes.string,
  max: PropTypes.number,
  rating: PropTypes.number
};

export default RatingContainerStatic;
