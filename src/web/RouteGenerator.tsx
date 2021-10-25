import React from 'react';
import {Route} from 'react-router-dom';

const Wrapper = ({component, routesData}) => {
  const navigate = (to, params, history) => {
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
    console.log(history);
  };
  const goBack = history => {
    history.goBack();
  };

  // const getParam = () => {
  //   return {params: {id: 1}};
  // };
  return React.cloneElement(component, {
    navigation: {navigate, goBack},
    // route: getParam(),
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
