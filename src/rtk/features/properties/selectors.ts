import { createSelector } from 'reselect';
import _ from 'lodash';
import { RootState } from '../../store';

export const getPropertiesState = (state: RootState) => state.properties || {};
export const getPropertiesListState = (state: RootState) => state.properties.properties || [];
export const getPropertiesFilterBedrooms = (state: RootState) => state.properties.filter.bedrooms;

export const getPropertyTypes = createSelector(getPropertiesListState, (properties) => {
  return _.uniq(_.map(properties, 'type'));
});

