import React from 'react';

// eslint-disable-next-line no-unused-vars
import { StackItemData } from '../../../../models/stack.models';

const StackItem = (props: StackItemData) => {
  const { name, imageSrc, link } = props;
  return (
    <div className="stack-item">
      <a href={link}>
        <div className="stack-image">
          <p>{imageSrc}</p>
        </div>
        <p>{name}</p>
      </a>
    </div>
  );
};

export default StackItem;
