import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';
import _ from 'lodash';
import classNames from 'classnames';

const RatingComponent = props => {
  const classes = classNames({
    'c-rating': true,
    'is-completed': props.completed,
    [`c-rating--${props.display}`]: true
  });

  return (
    <ul className={classes} role="list">
      { _.times(props.max, i => (
        <li className="c-rating__item" role="listitem" key={i}>
          <Star
            disabled={props.completed}
            active={i < props.rating}
            value={i + 1}
            onUpdate={props.onUpdate}
            >*
          </Star>
        </li>
      ))}
    </ul>
  );
};

RatingComponent.propTypes = {
  completed: PropTypes.bool,
  display: PropTypes.string,
  onUpdate: PropTypes.func,
  max: PropTypes.number
};

RatingComponent.defaultProps = {
  completed: false,
  max: 5,
  rating: 0
};

export default RatingComponent;
