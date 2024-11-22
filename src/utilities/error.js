const throwError = ({ status, message, options }) => {
  const error = new Error(message);
  error.status = status;
  error.options = options;
  throw error;
};

module.exports = throwError;
