import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { JiraTaskData } from '../../models/technology.models';
import JiraTask from '../common/jira-task';

const RecentWorks = () => {
  const data = useStaticQuery(
    graphql`
      query JiraMenuQuery {
        allRecentWorkJson {
          edges {
            node {
              id
              taskId
              project
              title
              assignee
              reporter
              type
              status
              priority
              resolution
              description
              technologies
              timeScheduled
            }
          }
        }
      }
    `
  );
  const menuItemData = data.allRecentWorkJson.edges
    .map((edge: any) => {
      return {
        id: edge.node.id,
        taskId: edge.node.taskId,
        project: edge.node.project,
        title: edge.node.title,
        assignee: edge.node.assignee,
        reporter: edge.node.reporter,
        type: edge.node.type,
        status: edge.node.status,
        priority: edge.node.priority,
        resolution: edge.node.resolution,
        description: edge.node.description,
        technologies: edge.node.technologies,
        timeScheduled: edge.node.dateCreated,
      }
    });

  const [searchString, setSearchString] = useState('');
  const [task, setTask] = useState<JiraTaskData>(menuItemData[0]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [displayedResults, setDisplayedResults] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);

  const menuItems = menuItemData
    .map((node: any) => {
      return <div className="jira-menu-item" key={node.id} onClick={() => setTask(node)}>
        <span className="jira-menu-task-id">{node.taskId}</span>
        <span className="jira-menu-task-title">{node.title}</span>
      </div>
    })

  const numResultsPerPage: number = 10;
  // let pageNumbers: any[] = [];

  // Only runs when the component is first mounted
  useEffect(() => {
    const maxPageNumber = Math.floor(menuItems.length / numResultsPerPage);
    console.log('menuitems')
    const pns = Array
      .from(
        { length: maxPageNumber },
        (item, index) => item = index + 1
      )
      .map(pn => {
        return <span>{pn}</span>
      });
    setPageNumbers(pns)
  }, []);
  useEffect(() => {
    setSearchString(searchString);
  }, [searchString]);

  useEffect(() => {
    setTask(task);
  }, [task]);

  return (
    <section id="recent-work">
      <div className="mb-4">
        <h2>Recent Work</h2>
        <p>Explore the JIRA tasks I've worked on in recent history.</p>
        <input placeholder="Technologies or key words" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      </div>

      <div className="recent-work-content">
        <div className="recent-work-left-menu">
          <div className="recent-work-menu-contents">
            {menuItems}
          </div>
          <div className="recent-work-pagination-controls">
            <span className="page-left">left</span>
            {pageNumbers}
            <span className="page-right">right</span>
          </div>
        </div>
        <div className="jira-task-container">
          <JiraTask
            id={task.id}
            project={task.project}
            taskId={task.taskId}
            title={task.title}
            assignee={task.assignee}
            reporter={task.reporter}
            type={task.type}
            priority={task.priority}
            resolution={task.resolution}
            description={task.description}
            timeScheduled={task.timeScheduled}
            status={task.status}
            technologies={task.technologies}
            key={task.id} />
        </div>
      </div>
    </section>
  )
}

export default RecentWorks;
