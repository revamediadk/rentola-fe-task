import { createProperty, filterByBedrooms, filteredByTypes, initialState, slice } from './slice';
import { PropertyItemType } from 'src/models/properties';

const propertiesList = [ {
  'id': '2e203634-c761-45f0-920b-e41da9f6bdc8',
  'bathrooms': 1,
  'bedrooms': 2,
  'type': 'house',
  'price': 829,
  'city': 'Zouerate',
  'address': 'Roxane Valley',
  'isVerified': false,
  'location': {
    'latitude': -86.94719963324076,
    'longitude': 58.365178182693256
  },
  'summary': 'Amet labore nostrud minim nostrud duis dolore laborum ea incididunt id elit est. Quis dolor consequat cillum ea consequat Lorem minim ad. Est pariatur duis ex est tempor officia sunt nostrud enim. Culpa minim non Lorem officia. Ipsum consequat aute velit laborum ex excepteur. Veniam commodo do excepteur velit et proident anim incididunt. Fugiat veniam eiusmod proident qui incididunt ex nostrud in ullamco mollit elit est.',
  'area': 51,
  'image': [
    'https://picsum.photos/1000/500',
    'https://picsum.photos/1000/500'
  ],
  'caseNumber': 992504
}, {
  'id': '2e203634-c761-45f0-920b-e41920bd8',
  'bathrooms': 1,
  'bedrooms': 4,
  'type': 'room',
  'price': 829,
  'city': 'Zouerate',
  'address': 'Roxane Valley',
  'isVerified': false,
  'location': {
    'latitude': -86.94719963324076,
    'longitude': 58.365178182693256
  },
  'summary': 'Amet labore nostrud minim nostrud duis dolore laborum ea incididunt id elit est. Quis dolor consequat cillum ea consequat Lorem minim ad. Est pariatur duis ex est tempor officia sunt nostrud enim. Culpa minim non Lorem officia. Ipsum consequat aute velit laborum ex excepteur. Veniam commodo do excepteur velit et proident anim incididunt. Fugiat veniam eiusmod proident qui incididunt ex nostrud in ullamco mollit elit est.',
  'area': 51,
  'image': [
    'https://picsum.photos/1000/500',
    'https://picsum.photos/1000/500'
  ],
  'caseNumber': 992504
} ] as PropertyItemType[];
const newProperty = {
  'id': '2e203634-c761-45f0-920b-e41da9f6bdc8',
  'bathrooms': 1,
  'bedrooms': 2,
  'type': 'house',
  'price': 829,
  'city': 'Zouerate',
  'address': 'Roxane Valley',
  'isVerified': false,
  'location': {
    'latitude': -86.94719963324076,
    'longitude': 58.365178182693256
  },
  'summary': 'Amet labore nostrud minim nostrud duis dolore laborum ea incididunt id elit est. Quis dolor consequat cillum ea consequat Lorem minim ad. Est pariatur duis ex est tempor officia sunt nostrud enim. Culpa minim non Lorem officia. Ipsum consequat aute velit laborum ex excepteur. Veniam commodo do excepteur velit et proident anim incididunt. Fugiat veniam eiusmod proident qui incididunt ex nostrud in ullamco mollit elit est.',
  'area': 51,
  'image': [
    'https://picsum.photos/1000/500',
    'https://picsum.photos/1000/500'
  ],
  'caseNumber': 992504
};

describe('Filter properties', () => {
  test('should return an empty array of properties if the type does not match', () => {
    return expect(slice.reducer({
      ...initialState,
      properties: propertiesList
    }, filteredByTypes('apartment'))).toStrictEqual({
      ...initialState,
      properties: propertiesList,
      filter: {
        ...initialState.filter,
        type: 'apartment'
      }
    });
  });

  test('should filter properties by type', () => {
    return expect(slice.reducer({
      ...initialState,
      properties: propertiesList
    }, filteredByTypes('room'))).toStrictEqual({
      ...initialState,
      properties: propertiesList,
      filteredProperties: [ {
        'id': '2e203634-c761-45f0-920b-e41920bd8',
        'bathrooms': 1,
        'bedrooms': 4,
        'type': 'room',
        'price': 829,
        'city': 'Zouerate',
        'address': 'Roxane Valley',
        'isVerified': false,
        'location': {
          'latitude': -86.94719963324076,
          'longitude': 58.365178182693256
        },
        'summary': 'Amet labore nostrud minim nostrud duis dolore laborum ea incididunt id elit est. Quis dolor consequat cillum ea consequat Lorem minim ad. Est pariatur duis ex est tempor officia sunt nostrud enim. Culpa minim non Lorem officia. Ipsum consequat aute velit laborum ex excepteur. Veniam commodo do excepteur velit et proident anim incididunt. Fugiat veniam eiusmod proident qui incididunt ex nostrud in ullamco mollit elit est.',
        'area': 51,
        'image': [
          'https://picsum.photos/1000/500',
          'https://picsum.photos/1000/500'
        ],
        'caseNumber': 992504
      } ],
      filter: {
        ...initialState.filter,
        type: 'room'
      }
    });
  });
  test('should return all properties if a bedroom of each matches the filter', () => {
    return expect(slice.reducer({
      ...initialState,
      properties: propertiesList
    }, filterByBedrooms([ 1, 5 ]))).toStrictEqual({
      ...initialState,
      properties: propertiesList,
      filteredProperties: propertiesList,
      filter: {
        ...initialState.filter,
        bedrooms: [ 1, 5 ]
      }
    });
  });
  test('should return filtered properties by number of bedroom', () => {
    return expect(slice.reducer({
      ...initialState,
      properties: propertiesList
    }, filterByBedrooms([ 4, 5 ]))).toStrictEqual({
      ...initialState,
      properties: propertiesList,
      filteredProperties: [ {
        'id': '2e203634-c761-45f0-920b-e41920bd8',
        'bathrooms': 1,
        'bedrooms': 4,
        'type': 'room',
        'price': 829,
        'city': 'Zouerate',
        'address': 'Roxane Valley',
        'isVerified': false,
        'location': {
          'latitude': -86.94719963324076,
          'longitude': 58.365178182693256
        },
        'summary': 'Amet labore nostrud minim nostrud duis dolore laborum ea incididunt id elit est. Quis dolor consequat cillum ea consequat Lorem minim ad. Est pariatur duis ex est tempor officia sunt nostrud enim. Culpa minim non Lorem officia. Ipsum consequat aute velit laborum ex excepteur. Veniam commodo do excepteur velit et proident anim incididunt. Fugiat veniam eiusmod proident qui incididunt ex nostrud in ullamco mollit elit est.',
        'area': 51,
        'image': [
          'https://picsum.photos/1000/500',
          'https://picsum.photos/1000/500'
        ],
        'caseNumber': 992504
      } ],
      filter: {
        ...initialState.filter,
        bedrooms: [ 4, 5 ]
      }
    });
  });
});

describe('Create a new property', () => {
  test('should return properties with a new property', () => {
    return expect(slice.reducer({
      ...initialState,
      properties: propertiesList
    }, createProperty(newProperty))).toStrictEqual({
      ...initialState,
      properties: [ ...propertiesList, newProperty ],
    });
  });
});
