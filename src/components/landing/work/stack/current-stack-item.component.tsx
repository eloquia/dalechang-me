import React from 'react';

export interface IStackItem {
  name: string;
  items: string[];
}

const CurrentStackItem = (stackItem: IStackItem) => {
  const items = stackItem.items.map(i => {
    return <div className="technology">
      {i}
    </div>
  })
  return (
    <div className="current-stack-item">
      <h3>{stackItem.name}</h3>

      <div className="current-stack-item-container">
        {items}
      </div>
    </div>
  )
}

export default CurrentStackItem;
