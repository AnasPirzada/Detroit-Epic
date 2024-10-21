/* eslint-disable react/prop-types */
import classnames from 'classnames';
import { Button as BTN } from '@/components/ui/button';

const Button = ({ variant = 'primary', className = '', children, ...rest }) => {
  const baseStyle = 'px-4 py-2 font-semibold rounded';
  const buttonVariants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-secondary text-black hover:bg-secondary-dark',
  };

  const buttonClass = classnames(baseStyle, buttonVariants[variant], className);

  return (
    <BTN {...rest} className={buttonClass}>
      {children}
    </BTN>
  );
};

export default Button;
