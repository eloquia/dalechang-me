import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Section from '../../common/section';

const Eloquia = () => {
  const { eloquiaDataQuery } = useStaticQuery(graphql`
    query EloquiaDataQuery {
      eloquiaDataQuery: allWorkJson(filter: {jsonId: {eq: "eloquia"}}) {
        edges {
          node {
            client
            companyName
            dateEnded
            dateStarted
            description
            id
            jsonId
            location
            roleName
            takeaway
            workItems
          }
        }
      }
    }
  `);

  const eloquiaData = eloquiaDataQuery.edges[0].node;

  const eloquiaContent = [<div className="work-item">
    <div className="work-item-metadata">
      <div>
        <span className="text-gray text-large">{eloquiaData.roleName}</span><span className="text-blue text-large"> @ {eloquiaData.companyName}</span>
      </div>
      <div>
        <span className="text-gray">{eloquiaData.dateStarted} - {eloquiaData.dateEnded}</span>
      </div>

      <div className="work-item-imageless-section">
        <h3>Eloquia</h3>
        <p>{eloquiaData.description}</p>
      </div>
    </div>
  </div>]

  return (
    <Section>
      {eloquiaContent}
    </Section>
  )
}

export default Eloquia;