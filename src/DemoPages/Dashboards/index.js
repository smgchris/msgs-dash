import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import BasicDashboard from './Basic/';
import MainDashboard from './mainDashboard/Tables/ProductSummary'

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Dashboards = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/basic`} component={BasicDashboard}/>
                    <Route path ={`${match.url}/main`} component={MainDashboard}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Dashboards;