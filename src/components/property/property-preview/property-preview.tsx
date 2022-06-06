import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';
import Slider from '../../slider/slider';
import styles from './property-preview.module.scss';
import { Link } from 'react-router-dom';
import { PROPERTY_ITEM_IMAGE_SIZE } from 'src/constants';
import { PropertyPreviewProps } from 'src/models/props/properties';

const PropertyPreview: FC<PropertyPreviewProps> = (
  {
    images,
    city,
    link
  }
) => {
  return (
    <Link
      className={styles.preview}
      to={link}
      style={{minHeight: `${PROPERTY_ITEM_IMAGE_SIZE}px`}}
      data-testid="property-link"
    >
      <Slider images={images} size={PROPERTY_ITEM_IMAGE_SIZE}/>

      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className={styles.location}
      >
        {city}
      </Typography>
    </Link>
  );
};

export default memo(PropertyPreview);
