import React from 'react';

interface TextBlockProps {
  side: 'left' | 'right';
  content: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ side, content }) => {
  return (
    <div style={{
      width: '50%',
      padding: '50px',
      margin: '100vh 0',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      [side]: '10%',
      position: 'relative'
    }}>
      <p>{content}</p>
    </div>
  );
};

export default TextBlock;