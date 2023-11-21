import { twMerge } from 'tailwind-merge';
function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `bg-red-400
        text-white py-3 px-4 rounded flex items-center
        hover:bg-red-500 duration-200
        `,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
