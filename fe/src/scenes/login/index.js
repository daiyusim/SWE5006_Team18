import React, { Component } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

const Login = (props) => {
    const {nextPage} = props
    
    // Additional Code
    // Yup for form validation
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')

    });
    // Hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            // make api call
            console.log(values.email)
            console.log(values.password)
        },
    })
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor= "email">Email</label>
            <input
                id = "email"
                // binds to formik value
                name = "email"
                type = "email"
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                value = {formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor= "password">Password</label>
            <input
                id = "password"
                name = "password"
                type = "password"
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                value = {formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
            ) : null}
            <button type = "submit">Submit</button>
        </form>
    )
}

export default Login;