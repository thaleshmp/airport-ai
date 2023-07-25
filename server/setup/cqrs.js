'use strict';

const cqrs = require('cqrs');

module.exports = setup;

function setup(app) {

  const commandBus = new cqrs.CommandBus();  
  const queryBus = new cqrs.QueryBus();

  const queryHandlers = require('./../queries/queryHandlers');
  queryBus.registerHandlers(queryHandlers);

  const commandHandlers = require('./../commands/commandHandlers');
  commandBus.register(commandHandlers);

  const queryRoutes = require('./../routes/queryRoutes')(queryBus);
  const commandRoutes = require('./../routes/commandRoutes')(commandBus);

  // Use the routes
  app.use('/api', queryRoutes);
  app.use('/api', commandRoutes);
}
