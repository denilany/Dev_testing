import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'filled',
  disabled = false,
  fontWeight = 500,
  className,
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyle = {
    borderRadius: '9.17px',
    fontWeight: fontWeight,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    ...props.style,
  };

  // Variant styles
  const variantStyles = {
    filled: disabled
      ? 'bg-blue-200 text-white'
      : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    outline: disabled
      ? 'bg-white border border-blue-200 text-blue-200'
      : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:border-blue-700',
    'outline-light': disabled
      ? 'bg-gray-100 border border-gray-300 text-gray-400'
      : 'bg-blue-50 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:border-blue-700',
  };

  // Merge base styles with any additional styles from props
  const mergedStyles = {
    ...baseStyle,
    ...props.style
  };

  return (
    <button
      className={`
        ${variantStyles[variant] || variantStyles.filled}
        ${className}
        leading-normal
        transition-all duration-200
        disabled:opacity-70
        focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
        flex items-center justify-center
        font-montserrat
        rounded-[9.17px] !important
      `.replace(/\s+/g, ' ').replace(/\s+/g, ' ').trim()}
      style={mergedStyles}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
