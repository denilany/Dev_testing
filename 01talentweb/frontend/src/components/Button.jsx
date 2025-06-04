// export default function Button({ children, onClick, variant = 'primary', className = '' }) {
//   const base = 'flex justify-center items-center text-[12px] xl:text-[22px] px-4 md:text-base rounded font-semibold transition text-center';
//   const styles = {
//     primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
//     secondary: `${base} border border-blue-600 text-blue-600 hover:bg-blue-50`,
//   };

//   return (
//        <button className={`${styles[variant]} ${className}`} onClick={onClick} text-center>
//       {children}
//     </button>
//   );
// }

import React from 'react';

const Button = ({
  children,
  onClick,
  style = {},
  fontSize = {},
  className = '',
  ...props
}) => {
  const baseStyle = {
    borderRadius: '9.17px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    // fontSize: '24.45px',
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
      className={`${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


