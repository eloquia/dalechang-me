import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import WorkControl from './work-control.component';
// eslint-disable-next-line no-unused-vars
import { WorkControlsModel } from '../../../models/work.models';

const WorkControlsElement = styled.div`
  ${tw`flex flex-col place-items-start`}
  @media (max-width: ${props => props.theme.sizes.mobile}) {
    overflow: hidden;
    ${tw`m-0 p-0`}
  }
`;

/**
 * Work controls only need the `displayText` passed into it
 */
const WorkControls = (props: WorkControlsModel) => {
  const { workControlsArray, handleWorkChange } = props;
  return (
    <WorkControlsElement>
      {workControlsArray.map(workControlData => {
        return <WorkControl
            key={workControlData.id}
            id={workControlData.id}
            isActive={workControlData.isActive}
            handleWorkChange={handleWorkChange}
            displayText={workControlData.displayText}
        />
      })}
    </WorkControlsElement>
  );
}

export default WorkControls;
