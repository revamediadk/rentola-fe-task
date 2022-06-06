import _ from 'lodash';
import { PropertyItemType } from '../models/properties';

export const getMinMaxByProperty = (list: Pick<PropertyItemType, 'price'>[], property: string): [ number, number ] => {
  const min = _.minBy(list, property)!;
  const max = _.maxBy(list, property)!;

  return [
    min[property as keyof typeof min],
    max[property as keyof typeof max]
  ];
};

export const isPropertyExistInEnum = (enumList: any, property: any) => {
  return Object.values(enumList)?.includes(property);
}
