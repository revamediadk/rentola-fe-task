import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropertyItemType } from 'src/models/properties';
import { PropertiesState } from './types';
import { MAX_VALUE_RANGE, MIN_VALUE_RANGE } from 'src/constants';
import { getMinMaxByProperty } from '../../../utils';
import { getFilteredList } from './helpers';

export const initialState: PropertiesState = {
  properties: [],
  filteredProperties: [],
  filter: {
    type: '',
    bedrooms: [ MIN_VALUE_RANGE, MAX_VALUE_RANGE ]
  },
  isLoading: false
};

export const slice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    propertiesFetching(state) {
      state.isLoading = true;
    },
    propertiesFetchingSuccess(state, action: PayloadAction<PropertyItemType[]>) {
      state.properties = action.payload;
      state.filteredProperties = action.payload;
      state.filter.bedrooms = getMinMaxByProperty(action.payload, 'bedrooms');
      state.isLoading = false;
    },
    propertiesFetchingError(state) {
      state.isLoading = false;
    },
    createProperty(state, action: PayloadAction<PropertyItemType>) {
      state.properties.push(action.payload);
      state.isLoading = false;
    },
    filterByBedrooms(state, action: PayloadAction<[ number, number ]>) {
      state.filter.bedrooms = action.payload;
      state.filteredProperties = getFilteredList({
        list: state.properties,
        bedrooms: action.payload,
        type: state.filter.type
      });
    },
    filteredByTypes(state, action: PayloadAction<string>) {
      state.filter.type = action.payload;
      state.filteredProperties = getFilteredList({
        list: state.properties,
        bedrooms: state.filter.bedrooms,
        type: action.payload
      });
    }
  }
});

export const {
  propertiesFetching,
  propertiesFetchingSuccess,
  propertiesFetchingError,
  createProperty,
  filterByBedrooms,
  filteredByTypes
} = slice.actions;
export const properties = slice.reducer;
