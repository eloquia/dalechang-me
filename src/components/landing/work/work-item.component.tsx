import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
import { WorkData } from "../../../models/work.models";
import { UL } from '../../styles';

const WorkElement = styled.div`
  ${tw`pl-8`}

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    ${tw`m-0 p-4`}
  }
`;

const WorkItem = ( workData: WorkData ) => {
  return (
    <WorkElement className="work-item">
      <p><span>{workData.roleName}</span> @ <span>{workData.companyName}</span></p>
      <p><span>{workData.dateStarted} - {workData.dateEnded}</span></p>
      <p><span>{workData.location}</span></p>
      <UL>
        {workData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
      </UL>
    </WorkElement>
  );
}

export default WorkItem;
