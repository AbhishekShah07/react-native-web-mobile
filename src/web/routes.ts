import Home from '../shared/screens/Home/Home';
import Details from '../shared/screens/Details/Details';

export const routes = {
  Home: {
    path: '/',
    component: Home,
  },
  Details: {
    path: '/details/:id',
    component: Details,
  },
  Cart: {
    path: '/cart/:id',
    component: Details,
  },
};
