import * as React from 'react';
import { IFormField, Form } from './Forms';
import * as yup from 'yup';
import { Formik } from 'formik';
// import Grid from 'hedron';
// import styled from '../../lib/styled-components';

const createCameraForm: () => Array<IFormField> = () => [
  {
    type: 'input',
    name: 'brand',
    label: 'Camera Brand',
    placeholder: 'Camera Brand',
    validation: yup
      .string()
      .min(1)
      .required('Camera Brand is required'),
  },
  {
    type: 'input',
    name: 'model',
    label: 'Camera Model',
    placeholder: 'Camera Model',
    validation: yup
      .string()
      .min(1)
      .required('Camera Model is required'),
  },
];

export const CreateCameraForm: React.SFC = props => {
  const formRef = React.useRef<Formik>(null);

  return (
    <Form
      ref={formRef}
      error={null}
      submitting={false}
      fields={createCameraForm()}
      onSubmit={values => console.log('VALUES', values)}
    />
  );
};
