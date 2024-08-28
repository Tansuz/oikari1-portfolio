import { useState } from 'react'

import { Formik } from 'formik'

// Styling & bootstrap & NextUI
import './Form.scss'
import { Button } from 'react-bootstrap'
import { Input, Textarea } from '@nextui-org/react'

const Form = () => {
  // eslint-disable-next-line 
  const [send, setSend] = useState(false)

  const handleClickSend = async (values) => {
    return "Kiitos"
  }

  return (
    <div className='FormContainer'>
      <h1 id='contact'>Contact</h1>
      {!send ? (
        <h5>Feel free to contact me. Job offers or if u just wanna say HI!</h5>
      ) : (
        <h3>
          Thank you for contacting me! <br /> I will answer as soon as possible!
        </h3>
      )}
      <Formik
        initialValues={{ email: '', name: '', phone: '', message: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.phone) {
            errors.phone = <p>Missing information</p>
          }
          if (!values.email) {
            errors.email = <p>Missing information</p>
          }
          if (!values.name) {
            errors.name = <p>Missing information</p>
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = <p>Incorrect email format</p>
          }
          return errors
        }}
        onSubmit={(values) => {
          handleClickSend(values)
        }}>
        {!send
          ? ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <div className='TextAreaContainer'>
                <form onSubmit={handleSubmit}>
                  <Input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder='Name *'
                    className='input'
                    aria-label='Name'
                  />
                  {errors.name && touched.name && errors.name}
                  <Input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Email *'
                    className='input'
                    aria-label='Email'
                  />
                  {errors.email && touched.email && errors.email}
                  <Input
                    type='text'
                    name='phone'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder='Phone *'
                    className='input'
                    aria-label='phone'
                  />
                  {errors.phone && touched.phone && errors.phone}
                  <Textarea
                    type='text'
                    name='message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder='Message'
                    minRows={5}
                    maxRows={10}
                    aria-label='Message'
                  />
                  <div id='SubmitButton'>
                    <h6>Fields marked with * the provision of information is mandatory.</h6>
                    <Button type='submit'>Send</Button>
                  </div>
                </form>
              </div>
            )
          : null}
      </Formik>
    </div>
  )
}

export default Form
