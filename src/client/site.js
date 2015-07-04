'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './util/routes';

// Renders our top-level component inside a DOM node.
//React.render(routes, document.getElementById('mount'));

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('mount'));
});
