import { FC, memo } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '../../common/button/button';
import { PropertyActionProps } from 'src/models/props/properties';
import styles from './property-action.module.scss';
import { useNavigate } from 'react-router-dom';

const PropertyAction: FC<PropertyActionProps> = ({price, link}) => {
  const navigation = useNavigate();
  const goToProperty = () => navigation(link);

  return (
    <CardActions className={styles.action}>
      <div className={styles.price}><span>{price}</span> &#8364;/mo</div>
      <Button
        label="Read more"
        className={styles.button}
        onClick={goToProperty}
      />
    </CardActions>
  );
};

export default memo(PropertyAction);
