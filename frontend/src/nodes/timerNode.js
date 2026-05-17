import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  return (
    <BaseNode
      title="Timer"
      inputs={[{ id: `${id}-trigger` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <label>
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
          style={{ width: '80px' }}
        />
      </label>
    </BaseNode>
  );
};