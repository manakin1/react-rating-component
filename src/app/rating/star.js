import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Star = props => {
  const classes = classNames({
    'c-rating__img': true,
    'is-active': props.active
  });

  const handleClick = () => {
    if (props.onUpdate) {
      props.onUpdate(props.value);
    }
  };

  return (
    <button
      aria-label="Star"
      className={classes}
      disabled={props.disabled}
      role="button"
      value={props.value}
      onClick={handleClick}
      >*
    </button>
  );
};

Star.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onUpdate: PropTypes.func,
  value: PropTypes.number
};

export default Star;

