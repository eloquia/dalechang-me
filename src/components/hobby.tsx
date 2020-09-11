import React from 'react';

import { h1Style, h2Style, articleStyle } from './styles';

interface HobbyProps {
  id: number;
  hobbyName: string;
}

const hobbies: HobbyProps[] = [
  {
    id: 0,
    hobbyName: 'Bouldering'
  },
  {
    id: 1,
    hobbyName: 'Cooking'
  }
];

const Hobby = (props: HobbyProps) => {
  return (
    <section className="hobby">
      <h2 css={h2Style}>{props.hobbyName}</h2>
    </section>
  );
};

function Hobbies(): JSX.Element {
  return (
    <article className="hobbies" css={articleStyle}>
      <h1 css={h1Style}>Hobbies</h1>

      {hobbies.map(hobby => (
        <Hobby key={hobby.id} id={hobby.id} hobbyName={hobby.hobbyName} />
      ))}
    </article>
  );
}

export default Hobbies;
