const errorHandler = (error, request, response, next) => {
    console.error(error.message);
    res.status(500).send('Something broke!')
  };

    module.exports = {errorHandler};