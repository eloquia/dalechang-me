import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line no-unused-vars
import Interest, { InterestProps } from './interest'

function Interests(): JSX.Element {

  const interestsQuery = useStaticQuery(graphql`
    query InterestsQuery {
      interestsJson {
        interests {
          description
          name
          id
        }
      }
    }  
  `);
  // eslint-disable-next-line prefer-destructuring
  const interests: InterestProps[] = interestsQuery.interestsJson.interests;

  return (
    <section className="interests" id="interests">
      <h1>Interests</h1>

      {interests.map(interest => (
        <Interest
          key={interest.id}
          id={interest.id}
          name={interest.name}
          description={interest.description} />
      ))}
    </section>
  );
}

export default Interests;
