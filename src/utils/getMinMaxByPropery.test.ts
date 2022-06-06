import { getMinMaxByProperty } from './index';

test('Get min and max values', () => {
  expect(getMinMaxByProperty([
    { 'price': 829 },
    { 'price': 520 },
    { 'price': 1997 },
    { 'price': 1895 },
  ], 'price')).toStrictEqual([520, 1997]);

  expect(getMinMaxByProperty([
    { 'price': 829 },
    { 'price': 829 },
    { 'price': 829 },
    { 'price': 1895 },
  ], 'price')).toStrictEqual([829, 1895]);
})

