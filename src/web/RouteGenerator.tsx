import React from 'react';
import {Route, useParams, useLocation} from 'react-router-dom';
import {useHistory} from 'react-router';

const Wrapper = ({component, routesData}) => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  console.log(location.pathname.split('/'));
  const navigate = (to, params) => {
    let path = routesData[to].path;
    let newPath;
    switch (to) {
      case 'Details':
        newPath = path.replace(':id', params.id);
        break;
      default:
        newPath = path;
    }
    history.push(newPath);
  };
  const goBack = () => {
    history.goBack();
  };

  const getParam = () => {
    switch (location.pathname.split('/')[1]) {
      case 'details':
        return {params: {id: params.id}};
      case 'cart':
        return {params: {id: params.id}};
    }
  };
  return React.cloneElement(component, {
    navigation: {navigate, goBack},
    route: getParam(),
  });
};

export const RouteGenerator = routesData => {
  return Object.keys(routesData).map(route => {
    const currentRoute = routesData[route];
    const Component = currentRoute.component;
    return (
      <Route
        key={currentRoute.path}
        exact
        path={currentRoute.path}
        render={() => (
          <Wrapper component={<Component />} routesData={routesData} />
        )}
      />
    );
  });
};
