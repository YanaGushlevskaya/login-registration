import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Поле обязательно для заполнения.'),
  email: Yup.string()
    .email('Неверный формат почты')
    .required('Поле обязательно для заполнения.'),
  password: Yup.string()
    .min(8, 'Пароль очень короткий - минимум 8 символов.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Пароль должен содержать хотя бы одну заглавную букву и цифру.'
    )
    .required('Поле обязательно для заполнения.'),
  passwordConfirmation: Yup.string()
    .required('Поле обязательно для заполнения.')
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают.')
});

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

export const SignupForm = () => {

  const checkUserRegistration = ({name, email, password}) => {
    const users = localStorage.getItem('users');
    if(users) {
      for(let user in users) {
        if(user.email == email) {
          console.log('is registered');
        } else {
          console.log('just registered');
          localStorage.setItem('users', JSON.stringify([{name, email, password}]));
        }
      }
    } else {
      localStorage.setItem('users', JSON.stringify([{name, email, password}]));
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          checkUserRegistration(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='form-default'>
            <Field name='name' placeholder='Имя' className='input-default'/>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name='email' type='email' placeholder='Email' className='input-default'/>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name='password' placeholder='Пароль' className='input-default'/>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field
              name='passwordConfirmation'
              placeholder='Повторите пароль'
              className='input-default'
            />
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
              <div>{errors.passwordConfirmation}</div>
            ) : null}
            <button type='submit'>Зарегистрироваться</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
