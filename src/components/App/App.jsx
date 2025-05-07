// import { Suspense, lazy, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// import { RestrictedRoute } from "../RestrictedRoute";
// import { PrivateRoute } from "../PrivateRoute";
// import { refreshUser } from "../../redux/auth/operations";
// import { selectIsRefreshing } from "../../redux/auth/selectors";

// import "./App.css";


// const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
// const LoginPage =    lazy(() => import('../../pages/LoginPage/LoginPage'));

// function App() {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);
//   return (
//     <>
//       <p>project-Y1o2u3r4</p>
 
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Suspense fallback={null}>
//         <Routes>         
//         <Route  path="/register"  element={ <RestrictedRoute redirectTo="/dashboard"  component={<RegisterPage />} /> }  />
//         <Route  path="/login"     element={ <RestrictedRoute redirectTo="/dashboard" component={<LoginPage />} /> } />
        
//         </Routes>
//       </Suspense>
//     </>
//   );
// }

// export default App;


import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

// SAYFA BİLEŞENLERİ
import HomePage from "../../pages/homePage/HomePage";
import StatisticsPage from "../../pages/statisticsPage/StatisticsPage";
import CurrencyPage from "../../pages/currencyPage/CurrencyPage";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";

// LAZY LOAD
const RegisterPage = lazy(() => import('../../pages/registerPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/loginPage/LoginPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <p>Yükleniyor...</p>; // Refresh bekleniyorsa beklet

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Suspense fallback={<p>Yükleniyor...</p>}>

        <Routes>
          {/* Yönlendirme */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Giriş/Kayıt (giriş yapmışsa yönlendirilir) */}
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/home" component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/home" component={<LoginPage />} />}
          />

          {/* Özel alanlar (sadece giriş yapılmışsa görünür) */}
          <Route
            path="/home"
            element={<PrivateRoute redirectTo="/login" component={<HomePage />} />}
          />
          <Route
            path="/statistics"
            element={<PrivateRoute redirectTo="/login" component={<StatisticsPage />} />}
          />
          <Route
            path="/currency"
            element={<PrivateRoute redirectTo="/login" component={<CurrencyPage />} />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
