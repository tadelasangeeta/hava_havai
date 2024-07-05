import React from 'react';
import List from './List';

const Others = () => {
  return (
    <div>
      <h3>Others</h3>
      <List title="List 1" items={['Item 1', 'Item 2', 'Item 3']} />
      <List title="List 2" items={['Item 1', 'Item 2', 'Item 3']} />
      <List title="List 3" items={['Item 1', 'Item 2', 'Item 3']} />
    </div>
  );
};

export default Others;