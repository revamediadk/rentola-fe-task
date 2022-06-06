import React, { memo } from 'react';
import { ArrowProps } from '../../models/props/slider';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import classNames from 'classnames';
import styles from './slider.module.scss';

function Arrow({style, type, onClick, className}: ArrowProps) {

  return (
    <div
      style={style}
      onClick={onClick}
      className={classNames(styles.arrow, styles[type], {[className!]: className})}
    >
      {type === 'prev' && <ArrowBackIosOutlinedIcon/>}
      {type === 'next' && <ArrowForwardIosOutlinedIcon/>}
    </div>
  );
}

export default memo(Arrow);
