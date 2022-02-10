import React from 'react';

import { TextContent } from '../../styles';

export interface InterestProps {
  id: number;
  name: string;
  description: string;
}

const Interest = (props: InterestProps) => {
  const {id, name, description} = props;
  return (
    <div key={id}>
      <TextContent>
        <h2>{name}</h2>
        <p>{description}</p>
      </TextContent>
    </div>
  );
}

export default Interest;
