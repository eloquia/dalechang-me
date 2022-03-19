import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Section from '../../common/section';

const iconHeight = 32;

const Cobra = () => {
  const { cobraDataQuery } = useStaticQuery(graphql`
    query CobraDataQuery {
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
    }
  `);

  const cobraData = cobraDataQuery.edges[0].node;

  const cobraContent = [<div className="work-item">
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
        <StaticImage src={"http://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/java.png"} alt="Java" height={iconHeight} />
        <StaticImage src={"http://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/java-spring.png"} alt="Java Spring" height={iconHeight} />
        <StaticImage src={"http://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/apache-spark.png"} alt="Apache Spark Logo" height={iconHeight} />
        <StaticImage src={"http://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/apache-solr.png"} alt="Apache Solr Logo" height={iconHeight} />
        <StaticImage src={"http://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/hadoop.png"} alt="Hadoop Logo" height={iconHeight} />
        <StaticImage src={"http://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/apache-nifi.png"} alt="Apache NiFi Logo" height={iconHeight} />
      </div>
    </div>
    <div className="work-item-md-content">
      <StaticImage src={"http://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/cobra-ui.png"} alt="COBRA UI" layout="constrained" />
      <span className="text-sm"><em>Sample COBRA document view & tag interface</em></span>
    </div>
  </div>]

  return (
    <Section>
      {cobraContent}
    </Section>
  )
}

export default Cobra;