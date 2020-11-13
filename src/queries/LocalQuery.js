import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { DeleteWidgetMutation } from '../mutations';

export const LOCAL_QUERY = gql`
  query LocalQuery {
    editWidgetId @client
    selectedWidgets @client
  }
`;

export const LocalQuery = (props) => (
  <Query>
    {({ data, loading, error }) => {
      if (error) {
        console.error(error);
        return null;
      }
      if (loading) {
        return null;
      }
      return <DeleteWidgetMutation {...props} {...data} />;
    }}
  </Query>
);
