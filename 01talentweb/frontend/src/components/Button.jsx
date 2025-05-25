// File: components/Button.jsx
export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  // const base = 'px-6 py-2 rounded font-semibold transition';
  const base = ' text-[12px] xl:text-[22px] px-4 py-2 md:text-base rounded font-semibold transition 2xl:w-[377px] 2xl:h-[75px] text-center flex justify-center';
  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} border border-blue-600 text-blue-600 hover:bg-blue-50`,
  };

  return (
       <button className={`${styles[variant]} ${className}`} onClick={onClick} text-center>
     {/* <button className={styles[variant]} onClick={onClick} text-center> */}
      {children}
    </button>
  );
}
