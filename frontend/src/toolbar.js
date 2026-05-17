import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{
      padding: '10px 16px',
      background: '#ffffff',
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap',
    }}>
      <span style={{ fontSize: '11px', fontWeight: 700, color: '#999', marginRight: '4px', letterSpacing: '0.06em' }}>NODES</span>
      <DraggableNode type='customInput' label='Input' />
      <DraggableNode type='llm' label='LLM' />
      <DraggableNode type='customOutput' label='Output' />
      <DraggableNode type='text' label='Text' />
      <DraggableNode type='math' label='Math' />
      <DraggableNode type='api' label='API' />
      <DraggableNode type='note' label='Note' />
      <DraggableNode type='timer' label='Timer' />
      <DraggableNode type='condition' label='Condition' />
    </div>
  );
};