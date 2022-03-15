import { DateTime } from "luxon";

export type TaskStatus = 'BACKLOG' | 'DEFINED' | 'RESOLVED' | 'IN PROGRESS';
export type TaskPriority = 'Low' | 'Medium' | 'High';
export type TaskResolution = 'Unresolved' | 'Fixed';
export type TaskType = 'Task' | 'Feature';

export interface JiraTaskData {
  id: string;
  project: string;
  taskId: string;
  title: string;
  assignee: string;
  reporter: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority;
  resolution: TaskResolution;
  description: string;
  timeScheduled?: DateTime;
  dateCreated?: DateTime;
  technologies: string[];
}
