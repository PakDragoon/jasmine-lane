import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from './layouts/main';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import NotFound from './pages/Page404';
import Blog from './pages/Blog';
import Policy from './pages/Policy';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'home',
      element: <MainLayout />,
      children: [
        { element: <Home />, index: true },
        { path: 'about-us', element: <Blog /> },
        { path: 'contact-us', element: <Blog /> },
        { path: 'faqs', element: <Blog /> },
        { path: 'terms', element: <Terms />, },
        { path: 'policy', element: <Policy />, },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
