import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { TextField } from '@mui/material';

import { toFormikValidationSchema } from 'zod-formik-adapter';
import { orderFormSchema } from '../validation/orderForm';
import { UserData } from '../types/users';

interface Props {
  values: UserData;
  onChange: (value: Partial<UserData>) => void;
  onSubmit: (valued: UserData) => void;
}
export interface OrderFormHandle {
  submit: () => void;
  getValues: () => UserData | undefined;
}

const OrderForm = forwardRef<OrderFormHandle, Props>(
  ({ values, onChange, onSubmit }, ref) => {
    const formRef = useRef<FormikProps<UserData> | null>(null);

    useImperativeHandle(ref, () => ({
      submit: () => {
        formRef.current?.submitForm();
      },
      getValues: () => formRef.current?.values,
    }));

    return (
      <>
        <Formik
          innerRef={formRef}
          initialValues={values}
          enableReinitialize={false}
          validationSchema={toFormikValidationSchema(orderFormSchema)}
          onSubmit={onSubmit}
        >
          {({ handleChange, values, errors, touched }) => (
            <Form id="order-form">
              <TextField
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={(e) => {
                  onChange({ name: e.target.value });
                }}
                label="Name"
                error={!!errors.name && touched.name}
                helperText={touched.name && errors.name}
              />
              <TextField
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={(e) => {
                  onChange({ email: e.target.value });
                }}
                label="Email"
                error={!!errors.email && touched.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={(e) => {
                  onChange({ phone: e.target.value });
                }}
                label="Phone"
                error={!!errors.phone && touched.phone}
                helperText={touched.phone && errors.phone}
              />
              <TextField
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={(e) => {
                  onChange({ address: e.target.value });
                }}
                label="Address"
                error={!!errors.address && touched.address}
                helperText={touched.address && errors.address}
              />
            </Form>
          )}
        </Formik>
      </>
    );
  },
);

export default OrderForm;
