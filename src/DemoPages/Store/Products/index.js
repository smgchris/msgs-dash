import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import ItemsTable from './ItemsTable';


// Layout

import AppHeader from '../../../Layout/AppHeader';
import AppSidebar from '../../../Layout/AppSidebar';
import AppFooter from '../../../Layout/AppFooter';
import AddItem from './AddItem';
import UpdateItem from '../Products/UpdateItem';

const Products = ({match}) =>  (

            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Items */}
                            
                                <Route path={`${match.url}/add-new-product`} component={AddItem} />
                                <Route path={`${match.url}/manage-products`} component={ItemsTable} />
                                <Route path={`${match.url}/update-product/:id`} component={UpdateItem} />
                          
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
    )

export default Products;