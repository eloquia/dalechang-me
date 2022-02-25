import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { JiraTaskData } from '../../models/technology.models';
import JiraTask from '../common/jira-task';

const jiraHistory: JiraTaskData[] = [
  {
    id: '792ce360-e265-408e-99c8-6a04a94c99cb',
    title: 'Research options for uploading large files to avoid WAF issues in AWS.',
    description: 'AWS\'s WAF (web application firewall) is preventing request bodies > 4 KB from being passed to the backend for processing. However the issue is that users will often modify and save data that exceeds the WAF limit.',
    technologies: [
      'Terraform',
      'AWS',
      'API Gateway',
      'Lambda',
      'S3',
      'NodeJS',
      'Sequelize',
      'RDS',
      'Postgres',
      'TypeScript',
      'Jenkins',
    ],
    timeScheduled: DateTime.fromFormat('2022-02-16', 'yyyy-MM-dd'),
    status: 'In Progress'
  },
  {
    id: 'ac3ff00c-4e9a-4a2c-a870-c905a748a1ed',
    title: 'Develop a scalable pattern for filtering data based on a user\'s permissions.',
    description: 'As users sign up for more and more specialzied plans, the application needs a scalable and maintainable way to filter out data from retrieval.',
    technologies: [
      'Terraform',
      'AWS',
      'API Gateway',
      'Lambda',
      'S3',
      'NodeJS',
      'Sequelize',
      'RDS',
      'Postgres',
      'TypeScript',
      'Jenkins',
      'Angular'
    ],
    timeScheduled: DateTime.fromFormat('2022-02-02', 'yyyy-MM-dd'),
    status: 'Done',
  },
  {
    id: '91a7b00f-6e82-427a-8d1e-b2dd60966d78',
    title: 'Create dashboard component for creating/updating security roles.',
    description: 'Grouping policies into roles and assigning roles to users will make it easier for admins to understand the permissions that a person will have.',
    technologies: [
      'Angular',
      'TypeScript',
      'Angular',
      'Jenkins',
      'Artifactory',
    ],
    timeScheduled: DateTime.fromFormat('2022-01-19', 'yyyy-MM-dd'),
    status: 'Done',
  },
  {
    id: '91a7b00f-6e82-427a-8d1e-b2dd60966d78',
    title: 'Create dashboard component for viewing/updating security policies.',
    description: 'Admins need to be able to fine-tune the security enablements and restrictions for groups of and individual users.',
    technologies: [
      'Angular',
      'TypeScript',
      'Angular',
      'Jenkins',
      'Artifactory',
    ],
    timeScheduled: DateTime.fromFormat('2022-01-05', 'yyyy-MM-dd'),
    status: 'Done',
  },
];

const Technologies = () => {
  const [searchString, setSearchString] = useState('');

  const tasks = jiraHistory.map(jiraData => {
    return <JiraTask
      id={jiraData.id}
      title={jiraData.title}
      description={jiraData.description}
      timeScheduled={jiraData.timeScheduled}
      status={jiraData.status}
      technologies={jiraData.technologies}
      key={jiraData.id} />
  });

  useEffect(() => {
    setSearchString(searchString);
  }, [searchString]);

  return (
    <section id="technologies">
      <div className="mb-4">
        <h2>Technologies</h2>
        <p>Explore the JIRA tasks I've worked on in recent history.</p>
        <input placeholder="Technologies or key words" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      </div>

      <div className="jira-task-list">
        {tasks}
      </div>
    </section>
  )
}

export default Technologies;
