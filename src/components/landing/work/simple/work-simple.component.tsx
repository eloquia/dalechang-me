import React from 'react';
import WorkSimpleItem from './work-simple-item.component';
import { workData } from '../data';

const WorkSimple = () => {
  const workItems = workData.map(item => {
    return <WorkSimpleItem
      id={item.id}
      companyName={item.companyName}
      client={item.client}
      roleName={item.roleName}
      dateStarted={item.dateStarted}
      dateEnded={item.dateEnded}
      location={item.location}
      description={item.description}
      workItems={[]} />
  });

  return (
    <section className="work-simple">
      <h2>Where I've Worked</h2>

      <div className="work-items-container">
        {workItems}
      </div>
    </section>
  )
}

export default WorkSimple;
