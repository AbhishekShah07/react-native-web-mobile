import Home from '../shared/screens/Home';
import Details from '../shared/screens/Details';

export const routes = {
  Home: {
    path: '/',
    component: Home,
  },
  Details: {
    path: '/details/:id',
    component: Details,
  },
};
