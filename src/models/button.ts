import { ButtonProps as MuiButtonProps } from '@mui/material/Button/Button';

export const enum ButtonType {
  OUTLINED = 'outlined',
  CONTAINED = 'contained'
}

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  label: string;
  variant?: ButtonType;
}
