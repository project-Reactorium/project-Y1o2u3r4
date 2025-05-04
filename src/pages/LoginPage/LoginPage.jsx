import LoginForm from '../../components/LoginForm/LoginForm';
import { ContentContainer, MainContainer } from '../../components/RegisterForm/RegisterForm.styled';


const LoginPage = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LoginForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default LoginPage;