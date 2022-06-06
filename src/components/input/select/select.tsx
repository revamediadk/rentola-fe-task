import { FC, memo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectProps } from 'src/models/props/input';
import styles from './select.module.scss';
import { InputLabel } from '@mui/material';

const SelectLabels: FC<SelectProps> = ({values, setValue, label}) => {
  const [ value, setCurrentValue ] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        className={styles.select}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>

        {values.map(value => (
          <MenuItem value={value} className={styles.item} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
export default memo(SelectLabels);
