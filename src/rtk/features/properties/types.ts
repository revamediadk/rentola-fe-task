import { PropertyItemType } from 'src/models/properties';

export interface PropertiesFilterState {
  type: string;
  bedrooms: [ number, number ];
}

export interface PropertiesState {
  properties: PropertyItemType[];
  filteredProperties: PropertyItemType[];
  filter: PropertiesFilterState;
  isLoading: boolean;
}
