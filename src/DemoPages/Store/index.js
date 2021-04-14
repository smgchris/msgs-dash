import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from './Products';
import ProdCategories from './ProdCategories'
import StockProducts from './StockProducts'
import Requests from './Requests'
import DeptStock from './DeptStock';

const Store = ({match}) =>  (
            <Fragment>
                <Route path={`${match.url}/products`} component={Products} />
                <Route path={`${match.url}/categories`} component={ProdCategories} />
                <Route path={`${match.url}/stock`} component={StockProducts} />
                <Route path={`${match.url}/requests`} component={Requests} />
                <Route path={`${match.url}/dept-stock`} component={DeptStock} />
            </Fragment>

                                
                          
                        
        )

export default Store;