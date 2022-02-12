import React from 'react';
import { WorkData } from "../../../../models/work.models";

const WorkSimpleItem = (workData: WorkData) => {
  return (
    <div className="work-simple-item">
      <p><span>{workData.roleName}</span> @ <span>{workData.companyName}</span></p>
      <p><span>{workData.dateStarted} - {workData.dateEnded}</span></p>
      <p><span>{workData.location}</span></p>
      <p>{workData.description}</p>
      <ul>
        {workData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
      </ul>
    </div>
  )
}

export default WorkSimpleItem;
