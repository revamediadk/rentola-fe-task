import axios from 'axios';
import { BASE_URL } from 'src/api/api';
import { PropertyItemType } from 'src/models/properties';
import {
  propertyFetching,
  propertyFetchingError,
  propertyFetchingSuccess
} from './slice';
import { ROUTES } from 'src/models/routes';
import { AppDispatch } from '../../store';

export const fetchProperty = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(propertyFetching());
    const response = await axios.get<PropertyItemType>(`${BASE_URL}/properties/${id}`);
    dispatch(propertyFetchingSuccess(response.data));
  } catch (e) {
    window.location.href = ROUTES.PAGE_NOT_FOUND;
    dispatch(propertyFetchingError());
  }
};
