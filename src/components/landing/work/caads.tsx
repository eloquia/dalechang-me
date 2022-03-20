import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../../common/section';

const iconHeight = 32;

const Caads = () => {
  const { caadsDataQuery } = useStaticQuery(graphql`
    query CaadsDataQuery {
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
    }
  `);

  const caadsData = caadsDataQuery.edges[0].node;

  const caadsContent = [<div className="work-item">
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
        <StaticImage src={"../../../images/java.png"} alt="Java" height={iconHeight} />
        <StaticImage src={"../../../images/python.png"} alt="Python" height={iconHeight} />
        <StaticImage src={"../../../images/apache-spark.png"} alt="Apache Spark Logo" height={iconHeight} />
        <StaticImage src={"../../../images/apache-solr.png"} alt="Apache Solr Logo" height={iconHeight} />
        <StaticImage src={"../../../images/hadoop.png"} alt="Hadoop Logo" height={iconHeight} />
        <StaticImage src={"../../../images/d3js.png"} alt="D3JS Logo" height={iconHeight} />
        <StaticImage src={"../../../images/jupyter-notebook.png"} alt="Jupyter Notebook Logo" height={iconHeight} />
      </div>
    </div>
    <div className="work-item-md-content">
      <StaticImage src={"../../../images/caads-ui.png"} alt="CAADS UI" layout="constrained" />
      <span className="text-sm"><em>Sample CAADS dashboard</em></span>
    </div>
  </div>]

  return (
    <Section>
      {caadsContent}
    </Section>
  )
}

export default Caads;