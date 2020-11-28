import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
import { WorkControlModel } from '../../../models/work.models';

const WorkControlElement = styled('button')<{isActive: boolean}>`
  ${tw`pb-2`}

  color: ${props => props.isActive ? 'red' : 'black'};

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    color: black;
    text-align: center;
    text-decoration: none;
    ${tw`p-4`}
  }
`;

/**
 * 
 */
const WorkControl = (props: WorkControlModel) => {
  const { id, displayText, isActive, handleWorkChange } = props;

  return (
    <WorkControlElement isActive={isActive} onClick={() => handleWorkChange(id)}>{displayText}</WorkControlElement>
  );
};

export default WorkControl;
