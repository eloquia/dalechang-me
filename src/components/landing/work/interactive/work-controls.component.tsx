import React from 'react';

import WorkControl from './work-control.component';
// eslint-disable-next-line no-unused-vars
import { WorkControlsModel } from '../../../models/work.models';

/**
 * Work controls only need the `displayText` passed into it
 */
const WorkControls = (props: WorkControlsModel) => {
  const { workControlsArray, handleWorkChange } = props;
  return (
    <div>
      {workControlsArray.map(workControlData => {
        return <WorkControl
          key={workControlData.id}
          id={workControlData.id}
          isActive={workControlData.isActive}
          handleWorkChange={handleWorkChange}
          displayText={workControlData.displayText}
        />
      })}
    </div>
  );
}

export default WorkControls;
