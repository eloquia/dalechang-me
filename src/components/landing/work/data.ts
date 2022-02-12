import { WorkData } from '../../../models/work.models';

export const workData: WorkData[] = [
  {
    "id": "eloquia",
    "companyName": "Eloquia",
    "client": "",
    "roleName": "Founder",
    "dateStarted": "Oct 2019",
    "dateEnded": "Present",
    "location": "Somewhere in the Cloud",
    "description": "",
    "workItems": [
      "Develop and refine customer solutions",
      "Incubate ideas and technology for making the world a better place",
      "Lead design and organization of work items for clients"
    ],
    "takeaway": ""
  },
  {
    "id": "cigna",
    "companyName": "Cigna",
    "client": "Internal",
    "roleName": "Senior Software Engineering Advisor",
    "dateStarted": "Feb 2019",
    "dateEnded": "Present",
    "location": "Denver, CO, USA",
    "description": "As a leader in the health insurance industry, Cigna ",
    "workItems": [
      "Lead design and development of end-to-end features: PostgreSQL database design; REST API (Python + Flask or NodeJS); front-end (Angular 6+)",
      "Wireframed and developed reusable components in Sketch and Adobe XD with stakeholders",
      "Improved team output by 25% by teaching junior members of the team parts of the stack",
      "Developed Jenkins CI/CD pipelines for continuous integration and automated deployments"
    ],
    "takeaway": ""
  },
  {
    "id": "caads",
    "companyName": "Leidos",
    "client": "CAADS",
    "roleName": "Data Integration Engineer",
    "dateStarted": "April 2018",
    "dateEnded": "Jan 2019",
    "location": "Gaithersburg, MD, USA",
    "description": "Collaborative Advanced Analytics & Data Sharing (CAADS) is a data lake and self-service + guided platform targeted to help federal health-focused agencies identify trends in their data. Users can upload their structured (tabular) and unstructured (electronic document) data into an instance of cloud federated CAADS. Afterward either the client or a CAADS data scientist can leverage existing analytics tools or design new workflows to suit their needs.",
    "workItems": [
      "Lead the development of NLP ingestion and analytics pipelines via Apache Spark 2+, Apache Tika, and Lucene databases",
      "Developed, refined, and automated training & evaluation of machine learning inference models",
      "Defined requirements and developed/demo’ed prototypes and dashboards to clients",
      "Developed and tuned LSTM and bidirectional autoencoder neural network models for supervised machine learning inference on electronic documents"
    ],
    "takeaway": ""
  },
  {
    "id": "doj",
    "companyName": "Leidos",
    "client": "Department of Justice",
    "roleName": "Text Analytics and Software Analyst",
    "dateStarted": "Feb 2016",
    "dateEnded": "March 2018",
    "location": "Washington DC, USA",
    "description": "Collaborative Open Base for Review and Analytics (COBRA) is a big data, on premise open source platform for legal review and e-discovery. Federal agencies with non-existent litigation budgets use the platform to upload, organize, and identify documents with pertinent evidence for court matters.",
    "workItems": [
      "Developed ETL pipelines for batch uploads of electronic documents and images via OCR with Apache Tika",
      "Architected and lead development of an automated continuous active learning pipeline for improving supervised machine learning models in real-time",
      "Fine-tuned and vetted results document classifier results with machine learning SMEs",
      "Lead analytics team members in developing a system-wide audit system for capturing deltas in user activity and model history"
    ],
    "takeaway": ""
  }
];