import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './pages/Landing';
import Project from './pages/Project';

const Routes = () => {
    return (
      <BrowserRouter>
          <Route component={Landing} path="/" exact />
          <Route component={Project} path="/project"/>
      </BrowserRouter>
    );
}

export default Routes;