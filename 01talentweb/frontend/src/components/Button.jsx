// File: components/Button.jsx
export default function Button({ children, onClick, variant = 'primary' }) {
  const base = 'px-6 py-2 rounded font-semibold transition';
  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} border border-blue-600 text-blue-600 hover:bg-blue-50`,
  };

  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}
