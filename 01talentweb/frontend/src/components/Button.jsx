import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'filled',
  disabled = false,
  size = 'md',
  fontWeight = 500,
  padding = 'px-6 py-3',
  className = '',
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyle = {
    borderRadius: '9.17px',
    fontFamily: 'Montserrat',
    fontWeight: fontWeight,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    ...props.style,
  };

  // Size variants
  const sizeVariants = {
    sm: 'text-xs xs:text-sm sm:text-base',
    md: 'text-sm xs:text-base sm:text-lg',
    lg: 'text-base xs:text-lg sm:text-xl',
  };

  // Variant styles
  const variantStyles = {
    filled: disabled
      ? 'bg-blue-200 text-white'
      : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    outline: disabled
      ? 'bg-white border border-blue-200 text-blue-200'
      : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:border-blue-700',
  };

  // Padding based on size if not explicitly provided
  const paddingClass = padding || {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  }[size];

  return (
    <button
      className={`
        ${variantStyles[variant] || variantStyles.filled}
        ${sizeVariants[size] || sizeVariants.md}
        ${paddingClass}
        ${className}
        leading-normal
        transition-colors duration-200
        disabled:opacity-70
        focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
      `.replace(/\s+/g, ' ').trim()}
      style={baseStyle}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
