import React, { memo, useCallback } from 'react';
import SelectLabels from 'src/components/input/select/select';
import RangeSlider from 'src/components/input/range/range';
import styles from './list-property-filter.module.scss';
import { useAppDispatch, useAppSelector } from 'src/rtk/hooks';
import {
  getPropertiesFilterBedrooms,
  getPropertyTypes
} from 'src/rtk/features/properties/selectors';
import { filterByBedrooms, filteredByTypes } from 'src/rtk/features/properties';

const ListPropertyFilter = () => {
  const dispatch = useAppDispatch();
  const types = useAppSelector(getPropertyTypes);
  const bedrooms = useAppSelector(getPropertiesFilterBedrooms);

  const handleChangeBedrooms = useCallback((values: [ number, number ]) => {
    dispatch(filterByBedrooms(values));
  }, []);

  const handleChangeType = useCallback((type: string) => {
    dispatch(filteredByTypes(type));
  }, []);

  return (
    <div className={styles.filter}>
      <SelectLabels values={types} setValue={handleChangeType} label="Type"/>
      <RangeSlider value={bedrooms} setValue={handleChangeBedrooms} label="Bedrooms"/>
    </div>
  );
};

export default memo(ListPropertyFilter);
