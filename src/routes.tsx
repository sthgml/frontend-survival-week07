import Layout from './components/Layout';
import Error from './pages/Error';
import Intro from './pages/Intro/Intro';

const routes = [
  {
    element: (<Layout />),
    children: [
      { path: '/', element: (<Intro />) },
      { path: '*', element: (<Error />) },
    ],
  },
];

export default routes;
