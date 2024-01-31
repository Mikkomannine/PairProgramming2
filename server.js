const express = require('express');
const logger = require('./middleware/logger.js');

const app = express();

const { errorHandler } = require('./middleware/errorMiddleware.js');
const { unknownEndpoint } = require('./middleware/notFoundMiddleware.js');

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());


// Members API Routes
app.use('/api/services', require('./routes/servicesRouters.js'));
app.use('/api/tours', require('./routes/toursRouters.js'));
app.use('/api/users', require('./routes/usersRouters.js'));

// Handle Errors
app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));