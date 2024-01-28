import Layout from './components/Layout';
import Error from './pages/Error';
import Intro from './pages/intro/Intro';
import Order from './pages/order/Order';

const routes = [
  {
    element: (<Layout />),
    children: [
      { path: '/', element: (<Intro />) },
      { path: '*', element: (<Error />) },
      { path: '*', element: (<Order />) },
    ],
  },
];

export default routes;
