import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "./App.scss";
import LoginForm from "./components/auth/login-form/LoginForm";
import UsersPage from "./screens/users/UsersPage";
import AuthLayout from "./layouts/auth/AuthLayout";
import MainLayout from "./layouts/main/MainLayout";
import UserDetailsPage from "./screens/user-details/UserDetailsPage";
import ScrollToTop from "./utils/scrollToTop";
import DashboardPage from "./screens/dashboard/DashboardPage";

function App() {
  return (
    <SkeletonTheme baseColor="#c7c9c8" highlightColor="#b3b5b4">
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
          transition={Slide}
        />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />

            <Route
              path="/users/user-details/:id"
              element={<UserDetailsPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
