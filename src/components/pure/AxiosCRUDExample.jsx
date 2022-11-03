import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

import {
  createUser,
  deleteUserById,
  getAllPagedUsers,
  getAllUsers,
  getUserById,
  login,
  updateUserById
} from '../../services/axiosCRUDSevice'

const AxiosCRUDExample = () => {

  const loginSchema = Yup.object().shape(
    {
      email: Yup.string()
        .email('Invalid email format')
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
    }
  )
  
    const initialCredentials = {
      email: '',
      password: ''
    }

  const authUser = (values) => {
    login(values.email, values.password)
      .then((res) => {
        if (res.data.token) {
          alert(JSON.stringify(res.data.token))
          sessionStorage.setItem('token', res.data.token)
        } else {
          sessionStorage.removeItem('token')
          throw new Error('Login failure')
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`)
        sessionStorage.removeItem('token')
      })
      .finally(() => console.log('Login done')) 
  }

  // CRUD examples
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error('Users not found')
        }
      })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error(`No users found in page ${page}`)
        }
      })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        } else {
          throw new Error('User not found')
        }
      })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error('User not created')
        }
      })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const updateUser = (id, name, job) => {
    updateUserById(id, name, job)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data))
        } else {
          throw new Error('User not found & no update done')
        }
      })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const deleteUser = (id) => {
    deleteUserById(id)
      .then((response) => {
        if (response.status === 204) {
          alert(`User with id: ${id} successfully deleted`)
        } else {
          throw new Error('User not found & no delete done')
        }
      })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

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
          authUser(values)
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
      {/* Example buttons to test API response */}
      <div>
        <button onClick={obtainAllUsers} >
          Get All Users with Axios
        </button>
        <button onClick={() => obtainAllPagedUsers(1)} >
          Get All Users (Page 1) with Axios
        </button>
        <button onClick={() => obtainUserById(1)} >
          Get User 1 with Axios
        </button>
        <button onClick={() => createNewUser('morpheus', 'leader')} >
          Create User
        </button>
        <button onClick={() => updateUser(1, 'morpheus', 'Developer')} >
          Update User
        </button>
        <button onClick={() => deleteUser(1)} >
          Delete User
        </button>
      </div>
    </div>
  );
}

export default AxiosCRUDExample
