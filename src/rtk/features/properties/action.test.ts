import { getStoreWithState, RootState } from '../../store';
import { initialState } from './slice';
import { PropertyItemType } from 'src/models/properties';
import { ModalState } from '../modal';
import { PropertyState } from '../property';
import { fetchProperties } from './action';

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

describe('Fetch properties', () => {
  test('should return a list of properties', async () => {
    const state = getStateWithItems(propertiesList);
    const store = getStoreWithState(state);
    await store.dispatch(fetchProperties());
    expect(store.getState().properties.properties).toBeTruthy();
  });
});

function getStateWithItems(properties: PropertyItemType[]): RootState {
  return {
    properties: {...initialState, properties},
    property: {} as PropertyState,
    modal: {} as ModalState
  };
}
