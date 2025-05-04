import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { RestrictedRoute } from "../Routes/RestrictedRoute";
import "./App.css";

const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);

function App() {
  return (
    <>
      <p>project-Y1o2u3r4</p>
      <Suspense fallback={null}>
        <Routes>
         
        <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegisterPage />}
              />
            }
          />
        
         
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
