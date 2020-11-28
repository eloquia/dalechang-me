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
  const { displayTexts, handleWorkChange } = props;
  return (
    <WorkControlsElement>
      {displayTexts.map(displayTextItem => {
        return <WorkControl
            key={displayTextItem.id}
            id={displayTextItem.id}
            isActive={displayTextItem.isActive}
            handleWorkChange={handleWorkChange}
            displayText={displayTextItem.displayText}
        >
          {displayTextItem}
        </WorkControl>
      })}
    </WorkControlsElement>
  );
}

export default WorkControls;
