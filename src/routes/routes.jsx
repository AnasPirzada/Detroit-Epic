import AiEngine from '@/components/aiEngine';
import Login from '@/components/login';
import Register from '@/components/register';
import Result from '@/components/result';
import UserDashboard from '@/components/userDashboard';
import BlogPage from '@/pages/blogs';
import Experience from '@/pages/experience';
import ExperienceDetail from '@/pages/experienceDetail/inedx';
import FAQs from '@/pages/faq';
import DetroitEpicWeekend from '@/pages/guid';
import HowItWorks from '@/pages/howItWorks';
import PrivacyPolicy from '@/pages/privacyPolicy';
import BlogDetailPage from '@/pages/singleBlog';
import TermsAndConditions from '@/pages/termAndCondition';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ErrorPages from '../components/payment/ErrorPage.jsx';
import Payment from '../components/payment/index.jsx';
import About from '../pages/About/index.jsx';
import Contact from '../pages/ContactUS/index.jsx';
import Home from '../pages/home/Home';
import Price from '../pages/Price/Price.jsx';
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
        path: '/blogs/:id',
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
      {
        path: '/Payment',
        element: <Payment />,
      },
      {
        path: '/error',
        element: <ErrorPages />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/work',
        element: <HowItWorks />,
      },
      {
        path: '/guide',
        element: <DetroitEpicWeekend />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/price',
        element: <Price />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
