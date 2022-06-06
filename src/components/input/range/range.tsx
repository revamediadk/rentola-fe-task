import { memo } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { MAX_VALUE_RANGE, MIN_VALUE_RANGE, STEP_RANGE } from 'src/constants';
import { RangeSliderProps } from 'src/models/props/properties';
import styles from './range.module.scss';
import { InputLabel } from '@mui/material';

function RangeSlider({value, setValue, min, max, format = '', label }: RangeSliderProps) {
  const [minValue, maxValue] = value;

  const handleChange = (event: Event, newValue: number[] | number) => {
    setValue(newValue as [number, number]);
  };

  return (
    <Box className={styles.wrapper}>
      <InputLabel>{label}</InputLabel>
      <Slider
        className={styles.range}
        step={STEP_RANGE}
        min={min || MIN_VALUE_RANGE}
        max={max || MAX_VALUE_RANGE}
        value={value}
        onChange={handleChange}
      />
      <div className={styles.values}>
        <p>{minValue} {format}</p>
        <p>{maxValue} {format}</p>
      </div>
    </Box>
  );
}

export default memo(RangeSlider);
