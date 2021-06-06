import React from 'react';
import Card from './card.component';

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, index) => {
        return (
          <Card
            key={index}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
