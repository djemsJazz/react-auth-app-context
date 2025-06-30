import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from '../modules/home';
import AboutPage from '../modules/about';
import AppLayout from '../shared/components/layouts';
import UsersRouter from '../modules/users';
import ProtectedRoute from '../shared/components/protected-route';
import UserProfile from '../modules/users/pages/UserProfile';
import NotFoundPage from '../modules/not-found/NotFoundPage';
import ProtectedLayout from '../shared/components/layouts/ProtectedLayout';
import LoginPage from '../modules/auth/pages/LoginPage';


const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="users/*" element={<UsersRouter />} />
        {/* This is an example of user ProtecterRoute as a component, you must use this everytime you decalre a protected route */}
        <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        {/* If you have many route and you dont want to repeat ProtectedRoute, you can use the same principle, but in layout style*/}
        <Route element={<ProtectedLayout />}>
          <Route path="/profile-layout" element={<UserProfile />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default MainRouter;
