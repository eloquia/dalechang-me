import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line no-unused-vars
import Interest, { InterestProps } from './interest'
import { H1, Section } from '../../styles';

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
    <Section className="interests" id="interests">
      <H1>Interests</H1>

      {interests.map(interest => (
        <Interest
            key={interest.id}
            id={interest.id}
            name={interest.name}
            description={interest.description}/>
      ))}
    </Section>
  );
}

export default Interests;
