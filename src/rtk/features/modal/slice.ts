import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from './types';
import { ModalTypes } from 'src/models/modal';
import { isPropertyExistInEnum } from 'src/utils';

export const initialState: ModalState = {isOpen: false, type: null};


export const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalTypes>) => {
      if (!isPropertyExistInEnum(ModalTypes, action.payload)) {
        return;
      }

      state.isOpen = true;
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const {closeModal, openModal} = slice.actions;
export const modal = slice.reducer;
