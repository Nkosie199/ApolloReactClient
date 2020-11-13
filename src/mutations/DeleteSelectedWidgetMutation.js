import React from 'react';
import PropTypes from 'prop-types';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { AddSelectedWidgetIdMutation } from './AddSelectedWidgetMutation';

export const DELETE_SELECTED_WIDGETS_MUTATION = gql`
  mutation DeleteSelectedWidgetsMutation($widgetIds: [ID]) {
    deleteWidgets(widgetIds: $widgetIds) {
      id
    }
  }
`;

export const DeleteSelectedWidgetsMutation = (props) => (
  <Mutation mutation={DELETE_SELECTED_WIDGETS_MUTATION}>
    {(mutateDeleteWidgets) => (
      <AddSelectedWidgetIdMutation
        {...props}
        onDeleteSelectedWidgets={(widgetIds) => {
          console.log(widgetIds);
          return mutateDeleteWidgets({
            variables: { widgetIds },
            refetchQueries: props.refetchQueries,
          });
        }}
      />
    )}
  </Mutation>
);

AddSelectedWidgetIdMutation.propTypes = {
  refetchQueries: PropTypes.any,
};
