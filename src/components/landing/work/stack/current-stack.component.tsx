import React from 'react';
import CurrentStackItem from './current-stack-item.component';

const stackItems = [
  {
    name: 'Front-end',
    items: [
      'Angular 8+',
      'TypeScript',
      'Selenium',
    ],
  },
  {
    name: 'Back-end',
    items: [
      'NodeJS',
      'TypeScript',
      'ExpressJS',
      'AWS Lambda',
      'Python',
    ]
  },
  {
    name: 'Infrastructure',
    items: [
      'Terraform',
      'AWS',
    ]
  },
  {
    name: 'Database',
    items: [
      'PostgreSQL',
    ]
  },
  // {
  //   name: 'ML/AI',
  // },
].map(i => {
  return <CurrentStackItem name={i.name} items={i.items} />
});

const CurrentStack = () => {
  return (
    <section>
      <h1>Current Stack</h1>

      {stackItems}
    </section>
  );
};

export default CurrentStack;
