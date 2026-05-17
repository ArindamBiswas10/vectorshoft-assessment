import { Handle, Position } from 'reactflow';

const typeColors = {
  Input: '#ff6d5a',
  Output: '#20b69e',
  LLM: '#9b59b6',
  Text: '#3498db',
  Math: '#e67e22',
  API: '#2ecc71',
  Note: '#95a5a6',
  Timer: '#e74c3c',
  Condition: '#f39c12',
};

export const BaseNode = ({ title, inputs = [], outputs = [], children, extraHandles = [] }) => {
  const accentColor = typeColors[title] || '#ff6d5a';

  return (
    <div style={{
      minWidth: 220,
      background: '#ffffff',
      border: '1px solid #e0e0e0',
      borderLeft: `4px solid ${accentColor}`,
      borderRadius: '6px',
      padding: '12px 14px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      color: '#1a1a1a',
    }}>
      <div style={{
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.06em',
        color: accentColor,
        marginBottom: '10px',
        textTransform: 'uppercase',
      }}>
        {title}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>

      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ background: accentColor, border: 'none', width: 10, height: 10, ...input.style }}
        />
      ))}

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ background: accentColor, border: 'none', width: 10, height: 10, ...output.style }}
        />
      ))}

      {extraHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{ background: accentColor, border: 'none', width: 10, height: 10, ...handle.style }}
        />
      ))}
    </div>
  );
};