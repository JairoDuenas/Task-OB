import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email('Invalid email format')
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
  }
)

const LoginFormik = () => {
  const initialCredentials = {
    email: '',
    password: ''
  }

  const history = useHistory()

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** Yup validation schema ***
        validationSchema={loginSchema}
        // *** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // Datos se quedan registrados en el navegador
          await localStorage.setItem('credentials', values)
          history.push('/profile')
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
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="jane@acme.com" />
            
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
            <button type="submit">Login</button>
            {isSubmitting ? (<p>Login your credential...</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginFormik;
