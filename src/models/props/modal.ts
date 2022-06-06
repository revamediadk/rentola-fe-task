import { ModalProps as ModalPropsMaterial } from '@mui/material/Modal/Modal';

export interface ModalProps extends ModalPropsMaterial {
  onClose: () => void;
  title: string;
}
