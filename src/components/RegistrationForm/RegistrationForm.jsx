import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import s from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        try {
          await dispatch(register(values)).unwrap();
          actions.resetForm();
        } catch  {
          actions.setFieldError('email', 'User with this email already exists');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" placeholder="Enter your name" />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className={s.error} />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className={s.error} />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;