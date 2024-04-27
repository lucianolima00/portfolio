import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import ProjectView from './pages/Project';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Landing} path="/" exact/>
            <Route component={ProjectView} path="/project/:id"/>
        </BrowserRouter>
    );
}

export default Routes;