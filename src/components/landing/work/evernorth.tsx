import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../../common/section';

const iconHeight = 32;

const Evernorth = () => {
  const { evernorthDataQuery } = useStaticQuery(graphql`
    query EvernorthDataQuery {
      evernorthDataQuery: allWorkJson(filter: {jsonId: {eq: "evernorth"}}) {
        edges {
          node {
            client
            companyName
            dateEnded
            dateStarted
            description
            id
            jsonId
            location
            roleName
            takeaway
            workItems
          }
        }
      }
    }
  `);

  const evernorthData = evernorthDataQuery.edges[0].node;

  const evernorthContent = [<div className="work-item">
    <div className="work-item-md-content">
      <div>
        <span className="text-gray text-large">{evernorthData.roleName}</span><span className="text-blue text-large"> @ {evernorthData.companyName}</span>
      </div>
      <div>
        <span className="text-gray">{evernorthData.dateStarted} - {evernorthData.dateEnded}</span>
      </div>
      <h3>Client Management Platform</h3>
      <p>{evernorthData.description}</p>
      <h4 className="technology-title">Technologies Used</h4>
      <div className="technologies-used">
        <StaticImage src={"../../../images/powered-by-aws.png"} alt="Powered by AWS" height={iconHeight} />
        <StaticImage src={"../../../images/nodejs.png"} alt="NodeJS Logo" height={iconHeight} />
        <StaticImage src={"../../../images/python.png"} alt="Python Logo" height={iconHeight} />
        <StaticImage src={"../../../images/angular.png"} alt="Angular Logo" height={iconHeight} />
        <StaticImage src={"../../../images/postgresql.png"} alt="PostgreSQL Logo" height={iconHeight} />
        <StaticImage src={"../../../images/terraform.png"} alt="Hashicorp Terraform Logo" height={iconHeight} />
        <StaticImage src={"../../../images/jenkins.png"} alt="Jenkins Logo" height={iconHeight} />
        <StaticImage src={"../../../images/gitlab.png"} alt="GitLab Logo" height={iconHeight} />
        <StaticImage src={"../../../images/docker.png"} alt="Docker Logo" height={iconHeight} />
        <StaticImage src={"../../../images/kubernetes.png"} alt="Kubernetes Logo" height={iconHeight} />
      </div>
    </div>
    <div className="work-item-md-content">
      <StaticImage src={"../../../images/cmp-ui.png"} alt="Client Management Platform UI" layout="constrained" />
      <span className="text-sm"><em>Sample CMP dashboard</em></span>
    </div>
  </div>]

  return (
    <Section>
      {evernorthContent}
    </Section>
  )
}

export default Evernorth;