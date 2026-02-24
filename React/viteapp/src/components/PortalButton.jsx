import { createPortal } from 'react-dom';

function PortalButton({ onClick, children }) {
  return createPortal(
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        background: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>,
    document.body
  );
}

export default PortalButton;