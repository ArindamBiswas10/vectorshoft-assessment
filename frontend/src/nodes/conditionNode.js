import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-input` }]}
      outputs={[
        { id: `${id}-true`, style: { top: '33%' } },
        { id: `${id}-false`, style: { top: '66%' } },
      ]}
    >
      <label>
        If:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 10"
        />
      </label>
    </BaseNode>
  );
};