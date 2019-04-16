import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import * as H from 'history';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import styled from '../../lib/styled-components';
import { Routes } from './Routes';
import Route from './Route';
import { withAuthenticator } from 'aws-amplify-react';
import { Rehydrated } from 'aws-appsync-react';
import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';

Amplify.configure(awsmobile);

const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    // @ts-ignore
    type: awsmobile.aws_appsync_authenticationType,
    credentials: () => Auth.currentCredentials(),
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
  // @ts-ignore
  complexObjectsCredentials: () => Auth.currentCredentials(),
});

interface Props {
  history: H.History<any>;
}

const PageContainer = styled.div`
  display: flex;

  main {
    width: 100%;
    padding: 20px;
    padding-top: 60px;
  }
`;

const AppRouter: React.SFC<Props> = ({ history }) => {
  return (
    <Router history={history}>
      <>
        <ApolloProvider client={client}>
          <Rehydrated>
            <PageContainer>
              <Switch>
                {Routes.map(route => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={true}
                    component={route.component}
                  />
                ))}
              </Switch>
            </PageContainer>
          </Rehydrated>
        </ApolloProvider>
      </>
    </Router>
  );
};

export default withAuthenticator(AppRouter, true);
