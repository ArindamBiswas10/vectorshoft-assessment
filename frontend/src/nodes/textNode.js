import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const found = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!found.includes(match[1])) {
        found.push(match[1]);
      }
    }
    setVariables(found);
  }, [currText]);

  const lines = currText.split('\n').length;
  const cols = Math.max(20, currText.length);

  return (
    <BaseNode
      title="Text"
      outputs={[{ id: `${id}-output` }]}
    >
      <textarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        rows={Math.max(2, lines)}
        cols={Math.min(cols, 40)}
        style={{ resize: 'none', fontFamily: 'inherit' }}
      />

      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${((index + 1) / (variables.length + 1)) * 100}%` }}
        />
      ))}
    </BaseNode>
  );
};