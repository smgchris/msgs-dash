import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import ItemsTable from './ItemsTable';


// Layout

import AppHeader from '../../../Layout/AppHeader';
import AppSidebar from '../../../Layout/AppSidebar';
import AppFooter from '../../../Layout/AppFooter';
import AddItem from './AddItem';
import UpdateItem from '../ProdCategories/UpdateItem';

const ProdCategories = ({match}) =>  (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Items */}

                                <Route path={`${match.url}/add-new-product-category`} component={AddItem} />
                                <Route path={`${match.url}/manage-product-categories`} component={ItemsTable} />
                                <Route path={`${match.url}/update-product-category/:id`} component={UpdateItem} />
                          
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )

export default ProdCategories;