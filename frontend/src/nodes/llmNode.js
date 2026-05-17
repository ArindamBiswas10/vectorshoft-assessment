import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system`, style: { top: '33%' } },
        { id: `${id}-prompt`, style: { top: '66%' } },
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};