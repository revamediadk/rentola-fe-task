import { PropertyItemType } from 'src/models/properties';

type FilterList = {
  list: PropertyItemType[],
  bedrooms: [number, number],
  type: string
}

export const getFilteredList = ({ list, bedrooms: [min, max], type }: FilterList): PropertyItemType[] => {
  let result = list;
  result = result.filter(({bedrooms}) => bedrooms >= min && bedrooms <= max);

  if (type) {
    result = result.filter(property => property.type === type);
  }

  return result;
}
