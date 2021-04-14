import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import SuppliersTable from './SuppliersTable';


// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import AddSupplier from './AddSupplier';
import UpdateItem from '../Suppliers/UpdateItem';
import Debts from '../Suppliers/Debts'

class Suppliers extends React.Component {

    render() { 
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Suppliers */}
                            
                                <Route path={`${this.props.match.url}/add-new-supplier`} component={AddSupplier} />
                                <Route path={`${this.props.match.url}/manage-suppliers`} component={SuppliersTable} />
                                <Route path={`${this.props.match.url}/update-supplier/:id`} component={UpdateItem} />
                                <Route path={`${this.props.match.url}/debts/:id/:name`} component={Debts} />
                          

                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Suppliers;