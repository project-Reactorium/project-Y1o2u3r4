import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(12, 'Password must be at most 12 characters').required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').max(12, 'Password must be at most 12 characters').required('Password is required'),
});
