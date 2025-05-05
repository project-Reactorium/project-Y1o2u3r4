import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { register } from "../../redux/auth/operations";
import Logotip from "../../images/logo.svg";
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