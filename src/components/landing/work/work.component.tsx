import React, { useState } from 'react';
import { css } from '@emotion/core';
import tw from 'twin.macro';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
import { WorkData } from '../../../models/work.model';
import WorkItem from './work-item.component';

import { Section, H1 } from '../../styles';

/*
  This component contains all of the work history. Each segment of work
  is described by the `WorkItem` component and the overall `Work` component
  controls the display of each 

  This component also encapsulates the Current Stack data as well
*/

const workData: WorkData[] = [
  {
    "id": "eloquia",
    "companyName": "Eloquia",
    "client": "",
    "roleName": "Founder",
    "dateStarted": "Oct 2019",
    "dateEnded": "Present",
    "location": "Somewhere in the Cloud",
    "description": "",
    "workItems": [
      "Incubate ideas and technology for making the world a better place",
      "Lead design and organization of work items for clients"
    ],
    "takeaway": ""
  },
  {
    "id": "cigna",
    "companyName": "Cigna",
    "client": "Internal",
    "roleName": "Senior Software Engineering Advisor",
    "dateStarted": "Feb 2019",
    "dateEnded": "Present",
    "location": "Denver, CO, USA",
    "description": "",
    "workItems": [
      "Lead design and development of end-to-end features: PostgreSQL database design; REST API (Python + Flask or NodeJS); front-end (Angular 6+)",
      "Wireframed and developed reusable components in Sketch and Adobe XD with stakeholders",
      "Improved team output by 25% by teaching junior members of the team parts of the stack",
      "Developed Jenkins CI/CD pipelines for continuous integration and automated deployments"
    ],
    "takeaway": ""
  },
  {
    "id": "caads",
    "companyName": "Leidos",
    "client": "CAADS",
    "roleName": "Data Integration Engineer",
    "dateStarted": "April 2018",
    "dateEnded": "Jan 2019",
    "location": "Gaithersburg, MD, USA",
    "description": "Collaborative Advanced Analytics & Data Sharing (CAADS) is a data lake and self-service + guided platform targeted to help federal health-focused agencies identify trends in their data. Users can upload their structured (tabular) and unstructured (electronic document) data into an instance of cloud federated CAADS. Afterward either the client or a CAADS data scientist can leverage existing analytics tools or design new workflows to suit their needs.",
    "workItems": [
      "Lead the development of NLP ingestion and analytics pipelines via Apache Spark 2+, Apache Tika, and Lucene databases",
      "Developed, refined, and automated training & evaluation of machine learning inference models",
      "Defined requirements and developed/demo’ed prototypes and dashboards to clients",
      "Developed and tuned LSTM and bidirectional autoencoder neural network models for supervised machine learning inference on electronic documents"
    ],
    "takeaway": ""
  },
  {
    "id": "doj",
    "companyName": "Leidos",
    "client": "Department of Justice",
    "roleName": "Text Analytics and Software Analyst",
    "dateStarted": "Feb 2016",
    "dateEnded": "March 2018",
    "location": "Washington DC, USA",
    "description": "Collaborative Open Base for Review and Analytics (COBRA) is a big data, on premise open source platform for legal review and e-discovery. Federal agencies with non-existent litigation budgets use the platform to upload, organize, and identify documents with pertinent evidence for court matters.",
    "workItems": [
      "Developed ETL pipelines for batch uploads of electronic documents and images via OCR with Apache Tika",
      "Architected and lead development of an automated continuous active learning pipeline for improving supervised machine learning models in real-time",
      "Fine-tuned and vetted results document classifier results with machine learning SMEs",
      "Lead analytics team members in developing a system-wide audit system for capturing deltas in user activity and model history"
    ],
    "takeaway": ""
  }
];

const WorkContainer = styled.div`
  ${tw`flex flex-row`}

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    flex-direction: column;
  }
`;

const WorkControls = styled.ul`
  .active {
    color: red;
  }

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      float: left;
      button {
        display: block;
        color: black;
        text-align: center;
        padding: 16px;
        text-decoration: none;
      }
    }
  }
`;

const Work = () => {

  /*
    Initial state is to use the data from 
  */

  const [currentWork, setCurrentWork] = useState<WorkData>(workData[0]);

  const handleClick = (id: string) => {
    // search within the query for the corresponding WorkData
    const selectedWorkData: WorkData = workData.filter((workDatum: WorkData) => workDatum.id === id)[0];

    setCurrentWork(selectedWorkData);
  }

  const rolesAndIds: {role: string, id: string}[] = workData.map((workItem: WorkData) => {
    return {
      role: workItem.companyName,
      id: workItem.id
    }
  });

  return (
    <Section className="work-section" id="work">
      <H1>Work</H1>

      <WorkContainer>
        <div id="role-list">
          <WorkControls>
            {rolesAndIds.map(roleAndId => {
              return <li key={roleAndId.id}>
                <button onClick={() => handleClick(roleAndId.id)} key={roleAndId.id} type="button">{roleAndId.role}</button>
              </li>
            })}
          </WorkControls>
        </div>

        <WorkItem
            key={currentWork.id}
            id={currentWork.id}
            roleName={currentWork.roleName}
            companyName={currentWork.companyName}
            client={currentWork.client}
            dateStarted={currentWork.dateStarted}
            dateEnded={currentWork.dateEnded}
            location={currentWork.location}
            description={currentWork.description}
            workItems={currentWork.workItems}
            takeaway={currentWork.takeaway}
          />
      </WorkContainer>
    </Section>
  );
}

export default Work;
