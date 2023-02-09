import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
    }
);


const LoginFormik = () => {

    const initialCredentials = {
        email: "",
        password: ""
    }

    const navigate = useNavigate();

    const goProfile = ()=>{
        navigate("/profile")
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                //*** initial values that the form will take****/
                initialValues={initialCredentials}
                //*** yup validation schema ***/
                validationSchema={loginSchema}
                //*** on submit event ***//
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 100));
                    alert(JSON.stringify(values, null, 2));
                    //we save the data in the localstorage//
                    await localStorage.setItem("credentials", values);
                    goProfile();
                }}
            >
                {/* we obtain props from formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@gmail.com" />

                            {/* email errors */}
                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name="email" component="div" />
                                )
                            }

                            {/* password errors */}
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name="password" component="div" />
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials ...</p>) : null}
                        </Form>
            )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
