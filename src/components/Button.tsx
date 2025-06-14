// src/components/Button.tsx
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export function Button({ to, children, variant = 'primary', className }: ButtonProps) {
  const baseStyles = 'font-semibold py-2 px-4 rounded transition duration-300';
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  const combined = cn(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combined}>
      {children}
    </button>
  );
}
