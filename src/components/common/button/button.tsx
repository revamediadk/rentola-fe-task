import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import classNames from 'classnames';
import { ButtonProps, ButtonType } from 'src/models/button';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = (
  {
    label,
    variant = ButtonType.CONTAINED,
    className,
    ...props
  }
) => {
  return (
    <MuiButton
      className={classNames(styles.button, styles[variant], {[className!]: className})}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
