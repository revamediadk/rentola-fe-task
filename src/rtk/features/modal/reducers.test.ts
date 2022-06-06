import { modal, initialState, openModal, closeModal } from './slice';
import { getStoreWithState } from '../../store';
import { ModalTypes } from 'src/models/modal';

describe('Modal', () => {
  test('should open the modal with the certain type', () => {
    return expect(modal(initialState, openModal(ModalTypes.ADD_LISTING))).toEqual({
      isOpen: true,
      type: 'addListing'
    });
  });

  test('should not open the modal', () => {
    //@ts-ignore
    return expect(modal(initialState, openModal('wrong type'))).toEqual({
      isOpen: false,
      type: null
    });
  });

  test('should close the modal', () => {
    const store = getStoreWithState();
    store.dispatch(openModal(ModalTypes.ADD_LISTING));
    return expect(modal(store.getState().modal, closeModal())).toEqual({
      isOpen: false,
      type: null
    })
  })
});
