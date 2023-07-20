import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ children }) => {
  return (
    <div>
      <h3>{children}</h3>
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
