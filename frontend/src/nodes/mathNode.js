import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  return (
    <BaseNode
      title="Math"
      inputs={[
        { id: `${id}-a`, style: { top: '33%' } },
        { id: `${id}-b`, style: { top: '66%' } },
      ]}
      outputs={[{ id: `${id}-result` }]}
    >
      <label>
        Operation:
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </label>
    </BaseNode>
  );
};