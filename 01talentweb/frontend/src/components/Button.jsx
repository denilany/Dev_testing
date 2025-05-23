// File: components/Button.jsx
export default function Button({ children, onClick, variant = 'primary' }) {
  // const base = 'px-6 py-2 rounded font-semibold transition';
  const base = 'text-[12px] px-4 py-2 md:text-base md:px-6 md:py-3 rounded font-semibold transition 2xl:w-[377px] 2xl:h-[75px] text-center';
  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} border border-blue-600 text-blue-600 hover:bg-blue-50`,
  };

  return (
    <button className={styles[variant]} onClick={onClick} text-center>
      {children}
    </button>
  );
}
