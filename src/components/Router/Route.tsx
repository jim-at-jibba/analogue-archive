import * as React from 'react';
import { Route as R, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component: any;
}

const Route = ({ component: Component, ...rest }: Props) => {
  function renderRoute(props: any) {
    return <Component {...rest} {...props} />;
  }

  return <R {...rest} render={renderRoute} />;
};

export default Route;
