import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import s from "./LoginForm.module.css"; 

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className={s.error} />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className={s.error} />

          <button className={s.button} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging In..." : "Log In"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;