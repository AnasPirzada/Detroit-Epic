import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Result from '@/components/result';
import AiEngine from '@/components/aiEngine';
import Register from '@/components/register';
import Login from '@/components/login';
import FAQs from '@/pages/faq';
import Experience from '@/pages/experience';
import ExperienceDetail from '@/pages/experienceDetail/inedx';
import UserDashboard from '@/components/userDashboard';
import BlogPage from '@/pages/blogs';
import BlogDetailPage from '@/pages/singleBlog';

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
        path: '/faq',
        element: <FAQs />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/experience/:id',
        element: <ExperienceDetail />,
      },
      {
        path: '/user-profile',
        element: <UserDashboard />,
      },
      {
        path: '/blogs',
        element: <BlogPage />,
      },
      {
        path: '/blogs/:slug',
        element: <BlogDetailPage />,
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
