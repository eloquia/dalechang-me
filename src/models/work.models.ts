/**
 * Data to be displayed
 */
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

export interface WorkControlsArray {
  id: string;
  displayText: string;
  isActive: boolean;
}

export interface WorkControlsModel {
  workControlsArray: WorkControlsArray[];
  handleWorkChange: (id: string) => void;
}

export interface WorkControlModel {
  key: string;
  displayText: string;
  id: string;
  isActive: boolean;
  handleWorkChange: (id: string) => void;
}
