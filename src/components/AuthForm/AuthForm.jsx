import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar-with-style-item';

import { Icon } from '../../Icons';
import CustomField from '../CustomField/CustomField';

import style from './authForm.module.css';

const AuthForm = ({ type, validationSchema, initialValues, onSubmit }) => {
    return (
        <div className={`${type === 'register' ? style.register : style.login} ${style.formWrapper}`}>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                {({ values: { password } }) => (
                    <Form className={style.form}>
                        <Icon id="#icon-logo_mobile" className={style.icon_mob}></Icon>
                        {type == 'register' && <CustomField type="text" name="username" placeholder="Name" />}
                        <CustomField type="text" name="email" placeholder="E-mail" />
                        <CustomField type="password" name="password" placeholder="Password" />
                        {type === 'register' && <CustomField type="password" name="confirmPassword" placeholder="Confirm password" />}
                        {type === 'register' && (
                            <div className={style.passwordStrengthContainer}>
                                <PasswordStrengthBar password={password} />
                            </div>
                        )}

                        <button className={`${style.button_main} ${style.colored} `} type="submit">
                            {type === 'register' ? 'Register' : 'Login'}
                        </button>

                        <Link to={type === 'register' ? '/login' : '/register'}>
                            <button className={`${style.button_secondary} ${style.whiteButton}`} type="submit">
                                {type === 'register' ? 'Login' : 'Register'}
                            </button>
                        </Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AuthForm;
