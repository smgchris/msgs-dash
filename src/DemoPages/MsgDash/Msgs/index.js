import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import ItemsTable from './ItemsTable';
import ApproveMessages from './Approvals'


// Layout

import AppHeader from '../../../Layout/AppHeader';
import AppSidebar from '../../../Layout/AppSidebar';
import AppFooter from '../../../Layout/AppFooter';
import UpdateItem from './UpdateItem';
import AddItem from './AddItem';

class Items extends React.Component {

    render() { 
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Items */}
                            
                                <Route exact path={`${this.props.match.url}/`} component={ItemsTable} />
                                <Route exact path={`${this.props.match.url}/to-approve`} component={ApproveMessages} />
                                <Route path={`${this.props.match.url}/add-new-message`} component={AddItem} />
                                <Route path={`${this.props.match.url}/update-message/:id`} component={UpdateItem} />
                          
                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Items;