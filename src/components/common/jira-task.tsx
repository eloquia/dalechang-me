import React from 'react';
import { JiraTaskData } from '../../models/technology.models';

const JiraTask = (taskData: JiraTaskData) => {
  const tags = taskData.technologies.map(t => {
    return <li key={t}>{t}</li>
  });

  return (
    <div className="jira-task">
      <span className="bold">Title</span>
      <span>{taskData.title}</span>

      <span className="bold">Description</span>
      <span>{taskData.description}</span>

      <span className="bold">Status</span>
      <span>{taskData.status}</span>

      <span className="bold">Scheduled</span>
      <span className="italic">{taskData.timeScheduled.toFormat('MMM dd, yyyy')}</span>

      <span className="bold">Technologies</span>
      <ul className="technology-list">{tags}</ul>
    </div>
  )
}

export default JiraTask;
