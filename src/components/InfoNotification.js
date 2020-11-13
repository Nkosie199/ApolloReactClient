import React from 'react';
import PropTypes from 'prop-types';

import { Notification } from './Notification';

import './InfoNotification.css';

export const InfoNotification = ({ children, ...props }) =>
  <Notification className="info-notification" height="42px" {...props}>
    {children}
  </Notification>;

InfoNotification.propTypes = {
  children: PropTypes.any,
};
