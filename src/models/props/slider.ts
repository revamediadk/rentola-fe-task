import { CSSProperties } from 'react';

export interface ArrowProps {
  type: 'prev' | 'next';
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}
