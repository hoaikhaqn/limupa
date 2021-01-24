import React from 'react';

import Home from '../app/screens/Home';
import Products from '../app/screens/Products';

const routes = [{
    path: '/',
    main: (props) => <Home  {...props} />
},{
    path: '/products',
    main: (props) => <Products  {...props} />
}]

export default routes;