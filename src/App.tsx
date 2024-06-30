import React, { memo } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/LandingPage/SignUp/SignUp";
import Login from "./pages/LandingPage/Login/Login";
import ForgotPage from "./pages/LandingPage/ForgotPage/ForgotPage";
import urls from "./global/constants/UrlConstants";
import Products from "./pages/AllProduct/Products/Products";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route index element={<SignUp />} />
            <Route path={urls.SIGN_UP_VIEW_PATH} element={<SignUp />} />
            <Route path={urls.LOGIN_VIEW_PATH} element={<Login />} />
          </Route>
          <Route
            path={urls.FORGOT_PASSWORD_VIEW_PATH}
            element={<ForgotPage />}
          />
           <Route
            path={urls.PRODUCT_VIEW_PATH}
            element={<Products />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default memo(App);
