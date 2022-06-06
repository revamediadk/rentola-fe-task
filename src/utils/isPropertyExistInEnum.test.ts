import { isPropertyExistInEnum } from './index';

enum PropertiesEnum {
  First = 'First',
  Second = 'Second',
  Third = 'Third'
}

test('Check enum', () => {
  expect(isPropertyExistInEnum(PropertiesEnum, PropertiesEnum.First)).toBeTruthy();
  expect(isPropertyExistInEnum(PropertiesEnum, 'Forth')).toBeFalsy();
});
