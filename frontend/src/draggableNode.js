export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        padding: '5px 12px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        background: '#f4f4f4',
        border: '1px solid #e0e0e0',
        color: '#333',
        fontSize: '12px',
        fontWeight: 500,
        userSelect: 'none',
      }}
      draggable
    >
      {label}
    </div>
  );
};