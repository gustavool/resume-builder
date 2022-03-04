import * as yup from 'yup';

export const stepOneSchema = yup.object().shape({
  firstName: yup
    .string('Must be only characters')
    .required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  age: yup
    .number()
    .typeError('Must be a number')
    .positive('Must be a positive value')
    .integer('Must be a number')
    .required('Age is required'),
  gender: yup.string().required('Gender is required'),
  email: yup
    .string()
    .email('Need to be a valid email')
    .required('Email is required'),
});

export const stepTwoSchema = yup.object().shape({
  number: yup
    .number()
    .typeError('Must be a number')
    .positive('Must be a positive value')
    .integer('Must be a number')
    .required('Number is required'),
  address: yup.string().required('Address is required'),
  country: yup.string().required('Country is required'),
  state: yup.string('Must be a string'),
  city: yup.string('Must be a string'),
});

export const stepThreeSchema = yup.object().shape({
  occupation: yup.string().required('Occupation is required'),
  startDate: yup.date().required('Start Date is required'),
  endDate: yup.date().required('End Date is required'),
  employer: yup.string().required('Employer is required'),
  activities: yup.string().required('Activities are required'),
});

export const stepFourSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  startDate: yup.date().required('Start Date is required'),
  endDate: yup.date().required('End Date is required'),
  collegeSchool: yup.string().required('College or School is required'),
  activities: yup.string().required('Activities are required'),
});

export const stepFiveSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  date: yup.date().required('Date is required'),
  linkUrl: yup.string('Must be a string'),
  description: yup.string().required('Description is required'),
});
