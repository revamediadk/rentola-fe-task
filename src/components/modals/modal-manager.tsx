import React, { useCallback, useMemo } from 'react';
import ModalLayout from './modal-layout/modal-layout';
import AddNewListing from './add-new-listing-modal/add-new-listing';
import { closeModal } from '../../rtk/features/modal';
import { useAppDispatch, useAppSelector } from '../../rtk/hooks';

const ModalManager = () => {
  const { isOpen, type } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const closeModalHandler = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const modals = useMemo<any>(
    () => ({
      addListing: {
        title: 'List your property for rent on Rentola',
        component: AddNewListing,
      },
    }),
    []
  );

  if (!type || !modals[type]) return null;

  const RenderModalComponent = modals[type].component;

  return (
    <ModalLayout title={modals[type].title} open={isOpen} onClose={closeModalHandler}>
      <RenderModalComponent />
    </ModalLayout>
  );
};

export default ModalManager;
