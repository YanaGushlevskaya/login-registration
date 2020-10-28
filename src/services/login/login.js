import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Неверный формат почты')
    .required('Поле обязательно для заполнения'),
  password: Yup.string().required('Поле обязательно для заполнения'),
});

export const SigninForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SigninSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='form-default'>
            <Field name='email' type='email' placeholder='Email' className='input-default'/>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name='password' placeholder='Пароль' className='input-default'/>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type='submit'>Войти</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
