import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { JiraTaskData } from '../../models/technology.models';

const JiraTask = (taskData: JiraTaskData) => {
  // const tags = taskData.technologies.map(t => {
  //   return <li key={t}>{t}</li>
  // });

  return (
    <div className="jira-task">
      <div className="jira-task-header">
        <StaticImage src={"../../images/project-avatar.svg"} alt="Project image" width={64} height={64} />
        <div className="jira-task-header-main">
          <ul className="jira-task-header-items">
            <li className="jira-task-header-item">{taskData.project}</li>
            <li className="jira-task-header-item">{taskData.taskId}</li>
          </ul>
          <h3>{taskData.title}</h3>
        </div>
      </div>
      <div className="jira-task-content">
        <div className="jira-task-main-content">
          <div className="jira-task-details-container">
            <div className="jira-task-section-header">
              <h4>Details</h4>
              <div className="jira-task-section-header-line"></div>
            </div>
            <div className="jira-task-details">
              <div className="jira-task-detail">
                <span className="jira-task-detail-key">Type</span>
                <span className="jira-task-detail-value">{taskData.type}</span>
              </div>
              <div className="jira-task-detail">
                <span className="jira-task-detail-key">Status</span>
                <span className="jira-task-detail-value">{taskData.status}</span>
              </div>
              <div className="jira-task-detail">
                <span className="jira-task-detail-key">Priority</span>
                <span className="jira-task-detail-value">{taskData.priority}</span>
              </div>
              <div className="jira-task-detail">
                <span className="jira-task-detail-key">Resolution</span>
                <span className="jira-task-detail-value">{taskData.resolution}</span>
              </div>
            </div>
          </div>
          <div className="jira-task-description">
            <div className="jira-task-section-header">
              <h4>Description</h4>
              <div className="jira-task-section-header-line"></div>
            </div>
            <p>{taskData.description}</p>
          </div>
          <div className="jira-task-technologies">
            <div className="jira-task-section-header">
              <h4>Technologies</h4>
              <div className="jira-task-section-header-line"></div>
            </div>
            {/* <ul className="technology-list">{tags}</ul> */}
            <span>TBD</span>
          </div>
        </div>
        <div className="jira-task-side-content">
          <div className="jira-task-people">
            <div className="jira-task-section-header">
              <h4>People</h4>
              <div className="jira-task-section-header-line"></div>
            </div>
            <div className="jira-task-detail">
              <span className="jira-task-detail-key">Assignee</span>
              <span className="jira-task-detail-value">{taskData.assignee}</span>
            </div>
            <div className="jira-task-detail">
              <span className="jira-task-detail-key">Reporter</span>
              <span className="jira-task-detail-value">{taskData.reporter}</span>
            </div>
          </div>
        </div>

      </div>
      {/* <span className="bold">Technologies</span>
      <ul className="technology-list">{tags}</ul> */}
    </div>
  )
}

export default JiraTask;
