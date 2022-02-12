import React from 'react';

// eslint-disable-next-line no-unused-vars
import { WorkData } from "../../../models/work.models";

const WorkItem = (workData: WorkData) => {
  return (
    <div className="work-item">
      <p><span>{workData.roleName}</span> @ <span>{workData.companyName}</span></p>
      <p><span>{workData.dateStarted} - {workData.dateEnded}</span></p>
      <p><span>{workData.location}</span></p>
      <ul>
        {workData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
      </ul>
    </div>
  );
}

export default WorkItem;
