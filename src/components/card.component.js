import React from 'react';

export const Card = ({ id, name, email }) => {
  return (
    <div className='bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robot'></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
