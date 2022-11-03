import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
// Models
import { ROLES } from '../../../models/roles.enum'
import { User } from '../../../models/user.class'

const RegisterFormik = () => {
  let user = new User()

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '', // to confirm password
    role: ROLES.USER
  }

  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(6, 'Username must too short')
        .max(12, 'Username too log')
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email fromat')
        .required('Email is required'),
      role: Yup.string()
        .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
        .required('Role is required'),
      password: Yup.string()
        .min(8, 'Password too short')
        .required('Password is required')
        .matches(``),
      confirm: Yup.string()
        .when('password', {
          is: value => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            '¡Password must match!'
          )
        }).required('You must confirm the password')
      
    }
  )

  const submit = (values) => {
    console.log("Register user")
  }

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        // *** Yup validation schema ***
        validationSchema={registerSchema}
        // *** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {/* We obtain props from formik */}
        {({ values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur }) => (
            <Form>
              <label htmlFor="username">Username</label>
              <Field
                id="username"
                type="text"
                name="username"
                placeholder="Your username"
            />
            {/* Username errors */}
            {
              errors.username && touched.username && (
                  <ErrorMessage component="div" name="username" />
              )
            }
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="jane@acme.com"
            />
            {/* Email errors */}
            {
              errors.email && touched.email && (
                  <ErrorMessage component="div" name="email" />
              )
            }
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="password"
            />
            {/* Password errors */}
            {
              errors.password && touched.password && (
                  <ErrorMessage component="div" name="password" />
              )
            }

            <label htmlFor="confirm">Confirm password</label>
              <Field
                id="confirm"
                type="password"
                name="confirm"
                placeholder="confirm password"
            />
            {/* Confirm password errors */}
            {
              errors.confirm && touched.confirm && (
                  <ErrorMessage component="div" name="confirm" />
              )
            }

            <button type="submit">Register Account</button>
            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
            </Form>
          )}

      </Formik>
    </div>
  );
}

export default RegisterFormik;
