import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import SuppliersTable from './SuppliersTable';


// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import AddSupplier from './AddSupplier';

class Suppliers extends React.Component {

    state = {
        suppliers: [
            {
                id: 1,
                name: 'Potatoes Ltd',
                phone: '+250787161944',
                email: 'gorillla@munezero.com',
                address:'',
                paymentMode:''
            }
        ]
    }

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
                          

                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Suppliers;