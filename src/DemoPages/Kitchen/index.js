import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import RequestTable from './requestTable';
import Buffet from './buffet';
import KitchenStock from './stock';
import BuffetRequest from './buffet/Table/BuffetRequest';
import FrontEndOrders from './orders';
import RequestUpdateTable from './UpdateRequest';
import Summary from './Summary'



// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import AddItem from './AddItem';

class Requests extends React.Component {

    render() { 
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Items */}
                            
                                <Route path={`${this.props.match.url}/add-new-request`} component={AddItem} />
                                <Route path={`${this.props.match.url}/buffet`} component={Buffet} />
                                <Route path={`${this.props.match.url}/kitchen-stock`} component={KitchenStock} />
                                <Route path={`${this.props.match.url}/manage-requests`} component={RequestTable} />
                                <Route path={`${this.props.match.url}/buffet-request`} component={BuffetRequest} />
                                <Route path={`${this.props.match.url}/front-end-orders`} component={FrontEndOrders} />
                                <Route path={`${this.props.match.url}/update-request/:id`} component={RequestUpdateTable} />
                                <Route path={`${this.props.match.url}/summary`} component={Summary} />
                          
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

// this.props.roles.role_id === 1 && (

export default Requests;