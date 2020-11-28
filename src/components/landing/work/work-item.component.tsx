// eslint-disable-next-line no-unused-vars
import { UL } from '../../styles';
import { WorkData } from "../../../models/work.model";

const WorkItem = ( workData: WorkData ) => {
  return (
    <div className="work-item" style={{marginLeft: "1rem"}}>
      <p><span>{workData.roleName}</span> @ <span>{workData.companyName}</span></p>
      <p><span>{workData.dateStarted} - {workData.dateEnded}</span></p>
      <p><span>{workData.location}</span></p>
      <UL>
        {workData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
      </UL>
    </div>
  );
}

export default WorkItem;
