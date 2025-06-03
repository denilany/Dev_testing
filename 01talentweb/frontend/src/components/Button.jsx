import React from 'react';

const Button = ({
  children,
  onClick,
  style = {},
  className = '',
  ...props
}) => {
  const baseStyle = {
    borderRadius: '9.17px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '24.45px',
    lineHeight: '27.51px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    ...style
  };

  return (
    <button
      style={baseStyle}
      className={`${className} hover:opacity-90`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
