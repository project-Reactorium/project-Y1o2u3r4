import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { RestrictedRoute } from "../Routes/RestrictedRoute";
import "./App.css";

const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage =    lazy(() => import('../../pages/LoginPage/LoginPage'));

function App() {
  return (
    <>
      <p>project-Y1o2u3r4</p>
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
