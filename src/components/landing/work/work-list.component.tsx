import React from 'react';
import Eloquia from './eloquia';
import Evernorth from './evernorth';
import Caads from './caads';
import Cobra from './cobra';

const WorkList = () => {
  return (
    <div id="work" className="bg-sky-100">
      <div className='titled-section'>
        <h2 id="work-title">Where I've Worked</h2>

        <div className="content-list">
          <Eloquia />
          <Evernorth />
          <Caads />
          <Cobra />
        </div>
      </div>
    </div>
  )
}

export default WorkList;
