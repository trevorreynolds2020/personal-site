import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import Home from './home/Home'
import WorkContainer from './home/work/WorkContainer';
import Contact from './home/contact/Contact';
import HomeCopy from './home/Home copy 2';
import ProjectDetails from './home/work/projectDetails/ProjectDetails';
import PageNotFound from './pageNotFound/PageNotFound'


import ReactGA from 'react-ga';
import Work from './home/work/Work';
import About from './home/about/About';

import { fetchProjects } from '../redux/actions/projects';
// import { Path } from 'three';

const routes = [
    {
        name: "Home",
        path: "/",
        // exact: true,
        component: Home
    }, 
    {
        name: "Code",
        path: "/code",
        // exact: true,
        component: WorkContainer
    },
    {
        name: "Audio",
        path: "/audio",
        // exact: true,
        component: Contact
    },
    {
        name: "Project Details",
        path: "/code/:projectId",
        component: ProjectDetails
    },
    {
        name: "404 No match",
        component: PageNotFound
    }
];

const Routes = () => {    
    
    const logPageView = () => {
        // ReactGA.set({ page: window.location.pathname + window.location.search });
        // ReactGA.pageview(window.location.pathname + window.location.search);
    }
    logPageView();

    return (
        <Router > 
            {/* <Switch >               
                { routes.map( route => <Route key={route.name} exact={route.exact} path={route.path} component={route.component} /> ) }
            </Switch> */}
            <Switch>
                <Route path="/code">
                    <div>
                        <Home/>
                        <HomeCopy/>
                    </div>
                </Route>
                <Route path="/audio">
                    <div>
                        <Home/>
                    </div>
                </Route>
                <Route path="/">
                    <div>
                        <Home />
                        <About/>
                        {/* <Contact /> */}
                    </div>
                </Route>
                {/* <Route path={"/code/:projectId"} >
                    <ProjectDetails />
                </Route> */}
            </Switch>
        </Router>
    );
}


export default Routes;