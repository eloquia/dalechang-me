import React from 'react';

const skillsData = [
  {
    key: 1,
    groupName: 'Design',
    items: [
      'Wireframing in Sketch',
    ],
  },
  {
    key: 2,
    groupName: 'Backend Development',
    items: [
      'Developing in NodeJS & Python',
      ''
    ],
  },
  {
    key: 3,
    groupName: 'Frontend Development',
    items: [
      'Developing in Angular 11+',
      'Testing with Selenium & Jest',
    ],
  },
  {
    key: 4,
    groupName: 'Infrastructure',
    items: [
      'Defining infrastructure in Terraform',
      'CI/CD Pipelines in Jenkins',
      'Deploying to AWS',
    ],
  },
];

const Skills = () => {
  const skillsChildren = skillsData.map(skillsDatum => {
    return <div className="skill-group" key={skillsDatum.key}>

    </div>
  });

  return (
    <div id="skills" className="content">
      {skillsChildren}
    </div>
  )
}

export default Skills;
