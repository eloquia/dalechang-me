import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './work-simple.component.scss';

const WorkSimple = () => {
  const {
    cobraDataQuery,
    caadsDataQuery,
    cignaDataQuery,
    eloquiaDataQuery,
  } = useStaticQuery(graphql`
    query WorkDataQuery {
      cobraDataQuery: allWorkJson(filter: {jsonId: {eq: "cobra"}}) {
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
      caadsDataQuery: allWorkJson(filter: {jsonId: {eq: "caads"}}) {
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
      cignaDataQuery: allWorkJson(filter: {jsonId: {eq: "cigna"}}) {
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
  const cignaData = cignaDataQuery.edges[0].node;
  const caadsData = caadsDataQuery.edges[0].node;
  const cobraData = cobraDataQuery.edges[0].node;

  return (
    <section className="work-simple">
      <h2>Where I've Worked</h2>

      <div className="work-simple-content">
        <div className="work-items-container">
          {/* Start Latest job */}
          <div className="work-item-metadata">
            <div>
              <span className="text-gray text-large">{cignaData.roleName}</span><span className="text-blue text-large"> @ {cignaData.companyName}</span>
            </div>
            <div>
              <span className="text-gray">{cignaData.dateStarted} - {cignaData.dateEnded}</span>
            </div>
          </div>

          <div className="work-item-md">
            <div className="work-item-md-content">
              <StaticImage src={"../../../../images/cigna-ui.png"} alt="Client Management Platform UI" layout="constrained" />
            </div>
            <div className="work-item-md-content">
              <h3>Client Management Platform</h3>
              <p>{cignaData.description}</p>
              <h3>Responsibilities</h3>
              {cignaData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
            </div>
          </div>
          {/* End Latest job */}
        </div>

        <div className="work-items-container">
          {/* Start Latest job */}
          <div className="work-item-metadata">
            <div>
              <span className="text-gray text-large">{caadsData.roleName}</span><span className="text-blue text-large"> @ {caadsData.companyName}</span>
            </div>
            <div>
              <span className="text-gray">{caadsData.dateStarted} - {caadsData.dateEnded}</span>
            </div>
          </div>

          <div className="work-item-md-reverse">
            <div className="work-item-md-content">
              <StaticImage src={"../../../../images/caads-ui.png"} alt="CAADS UI" layout="constrained" />
            </div>
            <div className="work-item-md-content">
              <h3>Description</h3>
              <p>{caadsData.description}</p>
              <h3>Responsibilities</h3>
              {caadsData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
            </div>
          </div>
          {/* End Latest job */}
        </div>

        <div className="work-items-container">
          {/* Start Latest job */}
          <div className="work-item-metadata">
            <div>
              <span className="text-gray text-large">{cobraData.roleName}</span><span className="text-blue text-large"> @ {cobraData.companyName}</span>
            </div>
            <div>
              <span className="text-gray">{cobraData.dateStarted} - {cobraData.dateEnded}</span>
            </div>
          </div>

          <div className="work-item-md">
            <div className="work-item-md-content">
              <StaticImage src={"../../../../images/cobra-ui.png"} alt="COBRA UI" layout="constrained" />
            </div>
            <div className="work-item-md-content">
              <h3>Description</h3>
              <p>{cobraData.description}</p>
              <h3>Responsibilities</h3>
              {cobraData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
            </div>
          </div>
          {/* End Latest job */}
        </div>
      </div>
    </section>
  )
}

export default WorkSimple;
