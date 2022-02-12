import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
import { WorkControlsArray, WorkData } from '../../../../models/work.models';
import WorkItem from './work-item.component';

import WorkControls from './work-controls.component';
import { workData } from '../data';

/*
  This component contains all of the work history. Each segment of work
  is described by the `WorkItem` component and the overall `Work` component
  controls the display of each 

  This component also encapsulates the Current Stack data as well
*/



/**
 * Overall component for the Work section in the Landing Page.
 * Hydrates its child components and negotiates which work to display depending
 * on which button was clicked
 */
const WorkInteractive = () => {
  const [currentWork, setCurrentWork] = useState<WorkData>(workData[0]);
  const [workControlsArray, setWorkControlsArray] = useState<WorkControlsArray[]>(workData.map((datum: WorkData, index: number) => {
    return {
      displayText: datum.companyName,
      id: datum.id,
      isActive: index === 0,
    }
  }));

  const handleWorkChange = (id: string) => {
    // find selected work
    const focusedWork: WorkData = workData.filter(datum => datum.id === id)[0];
    // change active tab
    const updatedWorkControls: WorkControlsArray[] = workData.map(workDatum => {
      return {
        id: workDatum.id,
        displayText: workDatum.companyName,
        isActive: workDatum.id === id,
      }
    });
    setWorkControlsArray(updatedWorkControls);
    // change data displayed
    setCurrentWork(focusedWork);
  };

  return (
    <section className="work-section" id="work">
      <h1>Work</h1>

      <div>
        <WorkControls
          workControlsArray={workControlsArray}
          handleWorkChange={handleWorkChange}
        />

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
      </div>
    </section>
  );
}

export default WorkInteractive;
