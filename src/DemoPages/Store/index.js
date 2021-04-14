import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from './Products';
import ProdCategories from './ProdCategories'
import StockProducts from './StockProducts'
import Requests from './Requests'

const Store = ({match}) =>  (
            <Fragment>
                <Route path={`${match.url}/products`} component={Products} />
                <Route path={`${match.url}/categories`} component={ProdCategories} />
                <Route path={`${match.url}/stock`} component={StockProducts} />
                <Route path={`${match.url}/requests`} component={Requests} />
            </Fragment>

                                
                          
                        
        )

export default Store;