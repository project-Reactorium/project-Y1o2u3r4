import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RestrictedRoute } from "../Routes/RestrictedRoute";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import LogOut from "../LogOut/LogOut";
import "./App.css";


const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage =    lazy(() => import('../../pages/LoginPage/LoginPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <p>project-Y1o2u3r4</p>
      <LogOut />
      <Suspense fallback={null}>
        <Routes>         
        <Route  path="/register"  element={ <RestrictedRoute redirectTo="/"  component={<RegisterPage />} /> }  />
        <Route  path="/login"     element={ <RestrictedRoute redirectTo="/" component={<LoginPage />} /> } />
        
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
