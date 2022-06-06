import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './add-new-listing.module.scss';
import { TextField } from '@mui/material';
import Button from '../../common/button/button';
import FormBlockLayout from '../../layouts/form-layout/form-block-layout';
import { useAppDispatch } from 'src/rtk/hooks';
import { postProperty } from 'src/rtk/features/properties';
import { closeModal } from 'src/rtk/features/modal';
import { PropertyItemType } from 'src/models/properties';

const validationSchema = yup.object({
  address: yup
    .string()
    .required('Address is required'),
  bedrooms: yup
    .number()
    .min(1)
    .required('Bedrooms is required'),
  area: yup
    .number()
    .min(1)
    .required('Area is required'),
  rent: yup
    .number()
    .min(1)
    .required('Rent is required'),
  summary: yup
    .string()
    .required('Description is required')
});

const AddNewListing = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      address: '',
      type: '',
      bedrooms: 1,
      area: 30,
      rent: 500,
      summary: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //hardcode
      const uuid = uuidv4();

      const newItem = {
        ...values,
        city: 'London',
        type: 'house',
        image: [ 'https://picsum.photos/1000/500' ],
        caseNumber: 5555555,
        isVerified: false,
        bathrooms: 1,
        location: {
          latitude: 20,
          longitude: 30,
        },
        id: uuid,
      } as unknown as PropertyItemType;

      dispatch(closeModal());
      dispatch(postProperty(newItem));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormBlockLayout title="Location of the property">
        <TextField
          fullWidth
          id="address"
          name="address"
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </FormBlockLayout>

      <FormBlockLayout title="General info">
        {/*<TextField*/}
        {/*  fullWidth*/}
        {/*  id="type"*/}
        {/*  name="type"*/}
        {/*  label="Property type"*/}
        {/*  select*/}
        {/*  value={formik.values.type}*/}
        {/*  onChange={formik.handleChange}*/}
        {/*  error={formik.touched.type && Boolean(formik.errors.type)}*/}
        {/*  helperText={formik.touched.type && formik.errors.type}*/}
        {/*/>*/}
        <TextField
          fullWidth
          id="bedrooms"
          name="bedrooms"
          label="Bedrooms"
          type="number"
          value={formik.values.bedrooms}
          onChange={formik.handleChange}
          error={formik.touched.bedrooms && Boolean(formik.errors.bedrooms)}
          helperText={formik.touched.bedrooms && formik.errors.bedrooms}
        />
        <TextField
          fullWidth
          id="area"
          name="area"
          label="Area"
          type="number"
          value={formik.values.area}
          onChange={formik.handleChange}
          error={formik.touched.area && Boolean(formik.errors.area)}
          helperText={formik.touched.area && formik.errors.area}
        />
        <TextField
          fullWidth
          id="rent"
          name="rent"
          label="Rent, euro"
          type="number"
          value={formik.values.rent}
          onChange={formik.handleChange}
          error={formik.touched.rent && Boolean(formik.errors.rent)}
          helperText={formik.touched.rent && formik.errors.rent}
        />

      </FormBlockLayout>


      <FormBlockLayout title="Title and description">
        <TextField
          fullWidth
          id="summary"
          name="summary"
          label="Description"
          value={formik.values.summary}
          onChange={formik.handleChange}
          error={formik.touched.summary && Boolean(formik.errors.summary)}
          helperText={formik.touched.summary && formik.errors.summary}
        />
      </FormBlockLayout>

      <Button type="submit" label="Save listing" className={styles.button}/>
    </form>
  );
};

export default AddNewListing;
