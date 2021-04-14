import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';


// Layout

// import AppHeader from '../../Layout/AppHeader';
// import AppSidebar from '../../Layout/AppSidebar/';
// import AppFooter from '../../Layout/AppFooter/';
import Login from './login/';

const DefaultPage = ({match}) => (
    <Fragment>
        {/* <AppHeader/> */}
        {/* <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner"> */}
                <div className="login_main"><div><div>

                    {/* Charts */}

                    <Route path={`${match.url}/login`} component={Login}/>

                </div>
                {/* <AppFooter/> */}
            </div>
        </div>
    </Fragment>
);

export default DefaultPage;