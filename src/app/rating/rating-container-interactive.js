import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RatingComponent from './rating-component';

class RatingContainerInteractive extends Component {
  constructor(props) {
    super(props);

    const {rating, completed} = props;
    this.state = {rating, completed};

    this.handleClick = value => {
      this.setState({rating: value});
    };

    this.handleApply = () => {
      this.setState({completed: true});
    };
  }

  render() {
    const classes = classNames({
      'c-rating-container': true,
      'c-rating-container--interactive': true,
      'is-completed': this.state.completed
    });

    const completedMessage = this.state.completed ?
      (<p className="c-rating__completed">Thanks for your rating!</p>) :
      '';

    return (
      <div className={classes}>
        {completedMessage}
        <div className="c-rating__inner">
          <p className="c-rating__label">Rate this product</p>

          <RatingComponent
            completed={this.state.completed}
            onUpdate={this.handleClick}
            rating={this.state.rating}
            {...this.props}
            />

          <button
            className="e-btn e-btn--bordered c-rating__btn"
            disabled={this.state.completed || !this.state.rating}
            onClick={this.handleApply}
            >
            Apply
          </button>
        </div>
      </div>
    );
  }
}

RatingContainerInteractive.propTypes = {
  completed: PropTypes.bool,
  rating: PropTypes.number
};

export default RatingContainerInteractive;
