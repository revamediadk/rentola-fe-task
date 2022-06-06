import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropertyItemType } from 'src/models/properties';
import { PropertyState } from './types';

const initialState: PropertyState = {
  property: {
    location: {longitude: 0, latitude: 0},
    city: '',
    image: [],
    price: 0,
    summary: '',
    id: '',
    address: '',
    type: '',
    area: 0,
    bathrooms: 0,
    bedrooms: 0,
    caseNumber: 0,
    isVerified: false
  },
  isLoading: false
}

export const slice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    propertyFetching(state) {
      state.isLoading = true;
    },
    propertyFetchingSuccess(state, action: PayloadAction<PropertyItemType>) {
      state.isLoading = false;
      state.property = action.payload;
    },
    propertyFetchingError(state) {
      state.isLoading = false;
    }
  }
});

export const { propertyFetchingError, propertyFetchingSuccess, propertyFetching } = slice.actions;
export const property = slice.reducer;
