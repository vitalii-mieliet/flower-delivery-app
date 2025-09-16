import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { TextField } from '@mui/material';

import { toFormikValidationSchema } from 'zod-formik-adapter';
import { orderFormSchema } from '../validation/orderForm';
import { UserData } from '../types/users';
import { ORDER_FIELDS } from '../constants/order';

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
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form id="order-form">
              {ORDER_FIELDS.map(({ name, label, placeholder }, idx) => (
                <TextField
                  key={idx}
                  sx={{
                    width: '100%',
                    '& .MuiFormHelperText-root': {
                      margin: 0,
                      minHeight: '20px',
                    },
                  }}
                  name={name}
                  value={values[name]}
                  onChange={handleChange}
                  onBlur={(e) => {
                    handleBlur(e);
                    onChange({ [name]: e.target.value });
                  }}
                  label={label}
                  placeholder={placeholder}
                  error={!!errors[name] && touched[name]}
                  helperText={(touched[name] && errors[name]) || ' '}
                />
              ))}
            </Form>
          )}
        </Formik>
      </>
    );
  },
);

export default OrderForm;
