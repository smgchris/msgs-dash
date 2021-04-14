import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import ItemsTable from './ItemsTable';


// Layout

import AppHeader from '../../../Layout/AppHeader';
import AppSidebar from '../../../Layout/AppSidebar';
import AppFooter from '../../../Layout/AppFooter';

const DeptStock = ({match}) =>  (

            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Items */}
                            
                                <Route path={`${match.url}/`} component={ItemsTable} />
                          
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
    )

export default DeptStock;