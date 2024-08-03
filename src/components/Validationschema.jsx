
import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  addresses: Yup.array().of(
    Yup.object({
      houseNumber: Yup.string()
        .required('House number is required')
        .matches(/^[0-9]+$/, 'House number must be a number'),
      address: Yup.string()
        .required('Address is required'),
      landmark: Yup.string()
        .required('Landmark is required'),
    })
  )
});
