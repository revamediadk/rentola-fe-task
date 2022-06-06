import { ReactNode } from 'react';
import { PropertyDetails } from '../properties';
import { SliderProps } from '@mui/material/Slider';

type Link = string;

export type PropertyDetailsProps = PropertyDetails;

export interface PropertyPreviewProps {
  images: string[];
  link: Link;
  city: string;
}

export interface PropertyDetailProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

export interface PropertyActionProps {
  price: number;
  link: Link;
}

export interface RangeSliderProps extends SliderProps {
  value: [ number, number ];
  setValue: (value: [ number, number ]) => void;
  format?: string;
  label: string;
}
