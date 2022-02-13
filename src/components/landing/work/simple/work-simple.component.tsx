import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './work-simple.component.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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

  console.log('cobraData', cobraData)
  console.log('caadsData', caadsData)
  console.log('cignaData', cignaData)
  console.log('eloquiaData', eloquiaData)

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

          <Slider>
            <div>
              <h3 className="hidden">Wireframe</h3>
              <StaticImage src={"../../../../images/cigna-ui.png"} alt="Client Management Platform UI" layout="constrained" />
            </div>
            <div>
              <h3>Client Management Platform</h3>
              <p>{cignaData.description}</p>
            </div>
            <div>
              <h3>Responsibilities</h3>
              {cignaData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
            </div>
          </Slider>
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

          <Slider>
            <div>
              <h3 className="hidden">Wireframe</h3>
              <StaticImage src={"../../../../images/caads-ui.png"} alt="CAADS UI" layout="constrained" />
            </div>
            <div>
              <h3>CAADS</h3>
              <p>{caadsData.description}</p>
            </div>
            <div>
              <h3>Responsibilities</h3>
              {caadsData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
            </div>
          </Slider>
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

          <Slider>
            <div>
              <h3 className="hidden">Wireframe</h3>
              <StaticImage src={"../../../../images/cobra-ui.png"} alt="COBRA UI" layout="constrained" />
            </div>
            <div>
              <h3>COBRA</h3>
              <p>{cobraData.description}</p>
            </div>
            <div>
              <h3>Responsibilities</h3>
              {cobraData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
            </div>
          </Slider>
          {/* End Latest job */}
        </div>
      </div>
    </section>
  )
}

export default WorkSimple;
