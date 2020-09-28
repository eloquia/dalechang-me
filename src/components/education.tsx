/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { h1Style, h2Style, h3Style } from './styles';

const educationStyle = css`
  ${tw`my-32 px-64`}
`;

const educationRoleStyle = css`
  ${tw`mt-4 mb-8`}
`;

interface EducationRoleProps {
  id: number;
  roleName: string;
  startDate: Date;
  endDate: Date;
  roleDescription: string;
  responsibilities: string[];
}

const educationRoles: EducationRoleProps[] = [
  {
    id: 2,
    roleName: 'Lab Data Analyst',
    startDate: new Date(2012, 0),
    endDate: new Date(2012, 4),
    roleDescription: '',
    responsibilities: ['']
  },
  {
    id: 1,
    roleName: 'Lab Researcher',
    startDate: new Date(2011, 7),
    endDate: new Date(2011, 11),
    roleDescription: '',
    responsibilities: ['']
  },
  {
    id: 0,
    roleName: 'Robotics TA',
    startDate: new Date(2010, 7),
    endDate: new Date(2010, 11),
    roleDescription:
      'ENGR-1620 simulated an engineering-management company where students design, create, and program robots which compete in groups of tasks.',
    responsibilities: [
      'Guided students in building their robots',
      'Taught students how to develop logical functions, such as loops and conditionals, through programming software'
    ]
  }
];

const EducationRole = (props: EducationRoleProps) => {
  const responsibilities = props.responsibilities.map(responsibility => (
    <li key={responsibility}>{responsibility}</li>
  ));

  return (
    <section className="education-role" css={educationRoleStyle}>
      <h3 css={h3Style}>{props.roleName}</h3>
      <ul>
        <li>
          {new Intl.DateTimeFormat('en', { month: 'short' }).format(
            props.startDate
          )}{' '}
          {props.startDate.getFullYear()} -{' '}
          {new Intl.DateTimeFormat('en', { month: 'short' }).format(
            props.endDate
          )}{' '}
          {props.endDate.getFullYear()}
        </li>
      </ul>
      <p>{props.roleDescription}</p>
      <p>Responsibilities</p>
      <ul>{responsibilities}</ul>
    </section>
  );
};

function Education(): JSX.Element {
  return (
    <article className="education" css={educationStyle}>
      <h1 css={h1Style}>Education</h1>
      <div>
        <h2 css={h2Style}>Bachelor in Physics</h2>
        <ul>
          <li>University of Virginia</li>
          <li>Spring 2013</li>
          <li>Charlottesville, Virginia</li>
        </ul>
        <p>
          The Bachelor in Physics at UVa provides a rigorous yet balanced
          curriculumn between theory and application. Candidates have many
          opportunities to explore the breadth of the field. This wide range of
          topics prepares students for a variety of paths centered around
          solving problems and optimizing solutions with noisy data
        </p>

        {educationRoles.map(er => (
          <EducationRole
            key={er.id}
            roleName={er.roleName}
            id={er.id}
            startDate={er.startDate}
            endDate={er.endDate}
            roleDescription={er.roleDescription}
            responsibilities={er.responsibilities}
          />
        ))}
      </div>
    </article>
  );
}

export default Education;
