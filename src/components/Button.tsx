import React from 'react';

interface ButtonProps {
  children: string;
  customStyle: string;
  onClickButton: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, customStyle, onClickButton }) => {
  const btnDefaultStyle =
    'bg-accent text-slate-100 dark:bg-primary dark:text-accent px-10 py-2 rounded-full float-right flex items-center gap-2';
  return (
    <button type='button' className={customStyle || btnDefaultStyle} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
