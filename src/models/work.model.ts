export interface WorkData {
  id: string;
  companyName: string;
  client: string;
  roleName: string;
  dateStarted: string;
  dateEnded: string;
  location: string;
  description: string;
  workItems: string[];
  takeaway?: string;
}
