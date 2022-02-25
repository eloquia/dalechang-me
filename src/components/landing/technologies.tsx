import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

interface JiraTaskData {
  id: string;
  title: string;
  description: string;
  timeScheduled: DateTime;
  status: string;
  technologies: string[];
}

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
      'TypeScript',
      'Jenkins',
      'Angular'
    ],
    timeScheduled: DateTime.fromFormat('2022-02-16', 'yyyy-MM-dd'),
    status: 'Done'
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
      'TypeScript',
      'Jenkins',
      'Angular'
    ],
    timeScheduled: DateTime.fromFormat('2022-02-16', 'yyyy-MM-dd'),
    status: 'Done'
  },
  {
    id: 'ac3ff00c-4e9a-4a2c-a870-c905a748a1ed',
    title: 'Create dashboard component for viewing/updating security policies.',
    description: 'Admins need to be able to fine-tune the security enablements and restrictions for groups of and individual users.',
    technologies: [
      'Terraform',
      'AWS',
      'API Gateway',
      'Lambda',
      'S3',
      'NodeJS',
      'TypeScript',
      'Jenkins',
      'Angular'
    ],
    timeScheduled: DateTime.fromFormat('2022-02-16', 'yyyy-MM-dd'),
    status: 'Done'
  },
];

const Technologies = () => {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setSearchString(searchString);
  }, [searchString]);

  return (
    <section id="technologies">
      <h2>Technologies</h2>

      <p>Explore the JIRA tasks I've worked on in recent history.</p>

      <input placeholder="Technologies or key words" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
    </section>
  )
}

export default Technologies;
