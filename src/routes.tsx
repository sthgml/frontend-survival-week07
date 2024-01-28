import Layout from './components/Layout';
import Intro from './pages/Intro';

const routes = [
  {
    element: (<Layout />),
    children: [
      { path: '/', element: (<Intro />) },
    ],
  },
];

export default routes;
