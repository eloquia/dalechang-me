import React from 'react';

// eslint-disable-next-line no-unused-vars
import { StackGroupData } from '../../../../models/stack.models';
import StackItem from './stack-item.component';
import { H2 } from '../../../styles';

const StackGroup = (props: StackGroupData) => {
  const { name, children } = props;
  return (
    <div className="stack-group">
      <H2>{name}</H2>
      {children.map(child => {
        return <StackItem
            key={child.id}
            id={child.id}
            name={child.name}
            imageSrc={child.imageSrc}
            link={child.link} />
      })}
    </div>
  );
};

export default StackGroup;
