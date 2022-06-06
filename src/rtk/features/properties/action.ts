import axios from 'axios';
import { BASE_URL } from 'src/api/api';
import { PropertyItemType } from 'src/models/properties';
import { AppDispatch } from 'src/rtk/store';
import {
  propertiesFetching,
  propertiesFetchingSuccess,
  propertiesFetchingError,
  createProperty
} from './index';

export const fetchProperties = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(propertiesFetching());
    const response = await axios.get<PropertyItemType[]>(`${BASE_URL}/properties`);
    dispatch(propertiesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(propertiesFetchingError());
  }
};

export const postProperty = (body: PropertyItemType) => async (dispatch: AppDispatch) => {
  try {
    dispatch(propertiesFetching());
    const response = await axios.post<PropertyItemType>(`${BASE_URL}/properties`, body);
    dispatch(createProperty(response.data));
  } catch (e) {
    dispatch(propertiesFetchingError());
  }
};
