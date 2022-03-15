# Externalize

The Externalize Idea is to reach the following end state:

- Open source the database, microservice (Helm) and front-end components
- Put JIRA task data in a separate database
- Define Helm Chart for microservice + secrets and such
- Deploy Helm Chart
- Define front-end React component + secrets
- Deploy frontend component to NPM
- Provide steps on how developers can recreate their own in a monorepo
- Additionally develop a frontend & microservice for CRUD on the JIRA data

## Roadmap

- [ ] Explore options for data source
- [ ] Provision an instance of PostgreSQL
- [ ] Create database and tables
- [ ] Get credentials for database
- [ ] Create REST API for CRUD on the database
- [ ] Define two build definitions for CRUD REST API
  - [ ] Define build definition for local testing for CRUD REST API
  - [ ] Define Read-only REST API for frontend component
- [ ] Define frontend component that will be published
- [ ] Define frontend application for CRUD and additional Preview feature

## Ideas to Considerations

Instead of creating applications from scratch, it would be helpful to be able to use existing services

- GitHub has a Kanban board that I can use
  - Replaced components, including:
    - Data source
    - CRUD REST API
