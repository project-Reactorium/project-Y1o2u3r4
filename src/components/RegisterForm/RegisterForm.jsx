import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { register } from "../../redux/auth/operations";
// import Logotip from "../../images/logo.svg";
import PasswordStrengthBar from "react-password-strength-bar-with-style-item";
import styles from "../LoginForm/LoginForm.module.css";

import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(12, "Must be 12 characters or less")
    .required("Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password mismatch")
    .required("Required"),
});

const inputUnderlineStyles = {
  input: {
    color: "rgba(255, 255, 255, 0.9)",
    "::placeholder": {
      color: "rgba(255, 255, 255, 0.4)",
    },
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.4)",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.6)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(255, 255, 255, 0.8)",
  },
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  const handleSubmit = async (values, actions) => {
    const formData = {
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
  
    try {
      await dispatch(register(formData)).unwrap();
      toast.success("Registration successful!");
      actions.resetForm();
    } catch (error) {
      toast.error(error.message || "Registration failed!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className={styles.formStyled}>
        <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
          <img
            src="/public/images/logo.svg"
            alt="Logo MoneyGuard"
            width="36px"
            height="36px"
            draggable="false"
            style={{ display: 'inline-block' }}
          />
          <Typography
            variant="h5"
            style={{ color: 'white' }}
          >
            MoneyGuard
          </Typography>
        </Box>

        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
          }}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, touched, errors }) => (
            <Form>
              <Box sx={{ marginBottom: 2 }}>
                <Field name="username">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      autoComplete="username"
                      variant="standard"
                      placeholder="Name"
                      error={touched.username && Boolean(errors.username)}
                      helperText={touched.username && errors.username}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon
                              sx={{ color: 'rgba(255, 255, 255, 0.4)' }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={inputUnderlineStyles}
                    />
                  )}
                </Field>
              </Box>

              <Box sx={{ marginBottom: 2 }}>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      type="email"
                      placeholder="E-mail"
                      autoComplete="email"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon
                              sx={{ color: 'rgba(255, 255, 255, 0.4)' }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={inputUnderlineStyles}
                    />
                  )}
                </Field>
              </Box>

              <Box sx={{ marginBottom: 2 }}>
                <Field name="password">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={values.password}
                      onChange={e => {
                        handleChange(e);
                        setPassword(e.target.value);
                      }}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon
                              sx={{ color: 'rgba(255, 255, 255, 0.4)' }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={inputUnderlineStyles}
                    />
                  )}
                </Field>
              </Box>

              <Box sx={{ marginBottom: 1 }}>
                <Field name="passwordConfirm">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      type="password"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                      error={
                        touched.passwordConfirm &&
                        Boolean(errors.passwordConfirm)
                      }
                      helperText={
                        touched.passwordConfirm && errors.passwordConfirm
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon
                              sx={{ color: 'rgba(255, 255, 255, 0.4)' }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={inputUnderlineStyles}
                    />
                  )}
                </Field>
                <PasswordStrengthBar password={password} />
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={`${styles.buttonBase} ${styles.customButton}`}
                sx={{ borderRadius: '20px' }}
              >
                REGISTER
              </Button>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                fullWidth
                className={`${styles.buttonBase} ${styles.navLinkButton}`}
                sx={{
                  marginTop: 2,
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  color: '#623f8b',
                }}
              >
                LOG IN
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
