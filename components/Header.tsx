import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '20px',
      zIndex: 10,
      textAlign: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    }}>
      <h1>3D Scroll Website</h1>
    </header>
  );
};

export default Header;