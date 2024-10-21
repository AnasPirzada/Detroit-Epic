import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Result from '@/components/result';
import AiEngine from '@/components/aiEngine';
import Register from '@/components/register';
import Login from '@/components/login';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/result',
        element: <Result />,
      },
      {
        path: '/ai',
        element: <AiEngine />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
