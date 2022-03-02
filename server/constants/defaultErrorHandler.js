const errorHandler = {
  default: function (err, req, res, next) {
    const defaultErr = 
      {
        log : 'Express error handler caught unknown middleware error',
        status : 400,
        message : { err: 'An error occured'}
      };

    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
  },
}

  module.exports = errorHandler;