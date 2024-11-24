import { Formik ,Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
    userName: Yup.string().required('Userame is required'),
    password: Yup.string().min(8,'Password must bd at least 8 characters') .required('Password is required'),
    email: Yup.string().email('Invalid email').required('Email is requierd')
});

const FormikForm = () => (
    <Formik
        initialValues={{ userName: '', password: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => { console.log(values); }}
    >
        <Form>
            <Field type="text" name="name" />
            <ErrorMessage name='name' component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name='password' component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name='email' component="div" />
            <buttonn type="submit"> submit</buttonn>
        </Form>
    </Formik>
);

export default FormikForm;