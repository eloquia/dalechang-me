import React from 'react';
import { WorkData } from "../../../../models/work.models";

const WorkSimpleItem = (workData: WorkData) => {
  return (
    <div className="work-simple-item">
      {/* <div className="work-item-meta">
        <div className="work-item-meta-item">
          <span>{workData.roleName}</span> @ <span>{workData.companyName}</span>
        </div>
        <div className="work-item-meta-item">
          <span>{workData.dateStarted} - {workData.dateEnded}</span>
        </div>
        <div className="work-item-meta-item">
          <span>{workData.location}</span>
        </div>
      </div> */}

      <div className="work-item-content">
        <span className="bold">Description</span>
        <p>{workData.description}</p>

        <span className="bold">Responsibilities</span>
        <ul>
          {workData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default WorkSimpleItem;
