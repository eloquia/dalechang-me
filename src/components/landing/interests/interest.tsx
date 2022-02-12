import React from 'react';

export interface InterestProps {
  id: number;
  name: string;
  description: string;
}

const Interest = (props: InterestProps) => {
  const { id, name, description } = props;
  return (
    <div key={id}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Interest;
