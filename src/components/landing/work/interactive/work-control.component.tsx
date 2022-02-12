import React from 'react';

// eslint-disable-next-line no-unused-vars
import { WorkControlModel } from '../../../../models/work.models';

/**
 * 
 */
const WorkControl = (props: WorkControlModel) => {
  const { id, displayText, handleWorkChange } = props;

  return (
    <div onClick={() => handleWorkChange(id)}>{displayText}</div>
  );
};

export default WorkControl;
