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
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ...style, 
  };

  return (
    <button
      style={baseStyle}
      className={`${className} 
        text-sm 
        xs:text-base 
        sm:text-lg 
        md:text-xl 
        lg:text-2xl 
        xl:text-3xl 
        2xl:text-4xl 
        leading-normal 
        hover:opacity-90
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
