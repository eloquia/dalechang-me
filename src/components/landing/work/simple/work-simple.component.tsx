import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './work-simple.component.scss';

const iconHeight = 32;

const WorkSimple = () => {
  const {
    cobraDataQuery,
    caadsDataQuery,
    evernorthDataQuery,
    eloquiaDataQuery,
  } = useStaticQuery(graphql`
    query WorkDataQuery {
      cobraDataQuery: allWorkJson(filter: {jsonId: {eq: "cobra"}}) {
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
      caadsDataQuery: allWorkJson(filter: {jsonId: {eq: "caads"}}) {
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
      eloquiaDataQuery: allWorkJson(filter: {jsonId: {eq: "eloquia"}}) {
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

  const eloquiaData = eloquiaDataQuery.edges[0].node;
  const evernorthData = evernorthDataQuery.edges[0].node;
  const caadsData = caadsDataQuery.edges[0].node;
  const cobraData = cobraDataQuery.edges[0].node;

  return (
    <section id="work" className="work-simple">
      <h2>Where I've Worked</h2>

      <div className="work-simple-content">
        <div className="work-items-container">
          <div className="work-item-metadata">
            <div>
              <span className="text-gray text-large">{eloquiaData.roleName}</span><span className="text-blue text-large"> @ {eloquiaData.companyName}</span>
            </div>
            <div>
              <span className="text-gray">{eloquiaData.dateStarted} - {eloquiaData.dateEnded}</span>
            </div>
          </div>

          <div className="work-item-imageless">
            <div className="work-item-imageless-section">
              <h3>Eloquia</h3>
              <p>{eloquiaData.description}</p>
            </div>
            {/* <div className="work-item-imageless-section">
              <h3>Responsibilities</h3>
              {eloquiaData.workItems.map((workItem: string) => <li key={workItem}>{workItem}</li>)}
            </div> */}
          </div>
        </div>

        <div className="work-items-container">
          <div className="work-item-md">
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
                <StaticImage src={"../../../../images/powered-by-aws.png"} alt="Powered by AWS" height={iconHeight} />
                <StaticImage src={"../../../../images/nodejs.svg"} alt="NodeJS Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/python.svg"} alt="Python Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/angular.svg"} alt="Angular Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/postgresql-logo.svg"} alt="PostgreSQL Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/terraform.svg"} alt="Hashicorp Terraform Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/jenkins.svg"} alt="Jenkins Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/gitlab-logo.svg"} alt="GitLab Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/docker.png"} alt="Docker Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/kubernetes.svg"} alt="Kubernetes Logo" height={iconHeight} />
              </div>
            </div>
            <div className="work-item-md-content">
              <StaticImage src={"../../../../images/cmp-ui.png"} alt="Client Management Platform UI" layout="constrained" />
              <span className="text-sm"><em>Sample CMP dashboard</em></span>
            </div>
          </div>
        </div>

        <div className="work-items-container">
          <div className="work-item-md">
            <div className="work-item-md-content">
              <div>
                <span className="text-gray text-large">{caadsData.roleName}</span><span className="text-blue text-large"> @ {caadsData.companyName}</span>
              </div>
              <div>
                <span className="text-gray">{caadsData.dateStarted} - {caadsData.dateEnded}</span>
              </div>
              <h3>Description</h3>
              <p>{caadsData.description}</p>
              {/* CAADS Technologies: Java, Python, Spark, Hadoop, Solr, D3JS, Jupyter Notebook */}
              <h4 className="technology-title">Technologies Used</h4>
              <div className="technologies-used">
                <StaticImage src={"../../../../images/java.png"} alt="Java" height={iconHeight} />
                <StaticImage src={"../../../../images/python.svg"} alt="Python" height={iconHeight} />
                <StaticImage src={"../../../../images/apache-spark.png"} alt="Apache Spark Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/apache-solr.png"} alt="Apache Solr Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/hadoop.png"} alt="Hadoop Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/d3js.svg"} alt="D3JS Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/jupyter-notebook.png"} alt="Jupyter Notebook Logo" height={iconHeight} />
              </div>
            </div>
            <div className="work-item-md-content">
              <StaticImage src={"../../../../images/caads-ui.png"} alt="CAADS UI" layout="constrained" />
              <span className="text-sm"><em>Sample CAADS dashboard</em></span>
            </div>
          </div>
        </div>

        <div className="work-items-container">
          <div className="work-item-md">
            <div className="work-item-md-content">
              <div>
                <span className="text-gray text-large">{cobraData.roleName}</span><span className="text-blue text-large"> @ {cobraData.companyName}</span>
              </div>
              <div>
                <span className="text-gray">{cobraData.dateStarted} - {cobraData.dateEnded}</span>
              </div>
              <h3>Description</h3>
              <p>{cobraData.description}</p>
              {/* COBRA Technologies: Java, Spark, Hadoop, Solr, Java Spring, Apache NiFi */}
              <h4 className="technology-title">Technologies Used</h4>
              <div className="technologies-used">
                <StaticImage src={"../../../../images/java.png"} alt="Java" height={iconHeight} />
                <StaticImage src={"../../../../images/java-spring.svg"} alt="Java Spring" height={iconHeight} />
                <StaticImage src={"../../../../images/apache-spark.png"} alt="Apache Spark Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/apache-solr.png"} alt="Apache Solr Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/hadoop.png"} alt="Hadoop Logo" height={iconHeight} />
                <StaticImage src={"../../../../images/apache-nifi.png"} alt="Apache NiFi Logo" height={iconHeight} />
              </div>
            </div>
            <div className="work-item-md-content">
              <StaticImage src={"../../../../images/cobra-ui.png"} alt="COBRA UI" layout="constrained" />
              <span className="text-sm"><em>Sample COBRA document view & tag interface</em></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSimple;
