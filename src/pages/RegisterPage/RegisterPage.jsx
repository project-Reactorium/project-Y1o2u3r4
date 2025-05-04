import {RegisterForm} from '../../components/RegisterForm/RegisterForm';
import { ContentContainer, MainContainer } from '../../components/RegisterForm/RegisterForm.styled';

const RegisterPage = () => {
  return (
    <MainContainer isRegister={true}>
      <ContentContainer>
        <RegisterForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default RegisterPage;