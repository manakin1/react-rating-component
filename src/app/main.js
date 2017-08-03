import React from 'react';
import RatingContainerInteractive from './rating/rating-container-interactive';
import RatingContainerStatic from './rating/rating-container-static';

export const Main = () => {
  return (
    <main className="main o-main" role="main">
      <div className="o-container">
        <h1>Ratings</h1>
        <RatingContainerInteractive/>

        <RatingContainerInteractive
          completed
          rating={3}
          />

        <RatingContainerStatic
          rating={2}
          />
      </div>

      <div className="o-container">
        <h2>Alternative style</h2>

        <RatingContainerStatic
          display={'circles'}
          max={3}
          rating={2}
          />
      </div>
    </main>
  );
};
