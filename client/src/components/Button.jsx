import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
function Button({ children, onClick, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        `bg-red-400
        text-white py-3 px-4 rounded flex items-center
        hover:bg-red-500 duration-200
        `,
        className
      )}
    >
      {children}
    </motion.button>
  );
}

export default Button;
