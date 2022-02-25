import { DateTime } from "luxon";

export interface JiraTaskData {
  id: string;
  title: string;
  description: string;
  timeScheduled: DateTime;
  status: string;
  technologies: string[];
}
