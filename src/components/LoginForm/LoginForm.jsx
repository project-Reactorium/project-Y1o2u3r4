import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";



import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
// import Logotip from "../../../public/images/logo.svg";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(12, "Must be 12 characters or less")
    .required("Password Required"),
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



const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Login successful!");
      actions.resetForm();
      navigate("/dashboard"); 
    } catch (error) {
      toast.error(error.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className={css.formStyled}>
        <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
          <img
            src="/public/images/logo.svg"
            alt="Logo MoneyGuard"
            width="36px"
            height="36px"
            draggable="false"
            style={{ display: 'inline-block', color: '#623f8b' }}
          />
          <Typography
            variant="h5"
            style={{ color: 'white' }}
          >
            MoneyGuard
          </Typography>
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ marginBottom: 2 }}>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      variant="standard"
                      type="email"
                      placeholder="Email"
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
                      autoComplete="email"
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
                      type="password"
                      placeholder="Password"
                      fullWidth
                      autoComplete="current-password"
                      variant="standard"
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HttpsIcon
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

              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={`${css.buttonBase} ${css.customButton}`}
                sx={{ borderRadius: '20px' }}
              >
                LOG IN
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                fullWidth
                className={`${css.buttonBase} ${css.navLinkButton}`}
                sx={{
                  marginTop: 2,
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  color: '#623f8b',
                  textDecoration: 'none',
                }}
              >
                REGISTER
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginForm;
