import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import RolesTable from './RolesTable';
import RoleUsersTable from './RoleUsersTable';



// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import AddRole from './AddRole';
import UpdateItem from './UpdateItem';

class Roles extends React.Component {

    render() { 
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Roles */}
                            
                                <Route path={`${this.props.match.url}/add-new-role`} component={AddRole} />
                                <Route path={`${this.props.match.url}/manage-roles`} component={RolesTable} />
                                <Route path={`${this.props.match.url}/view-role-users/:role_id`} component={RoleUsersTable} />
                                <Route path={`${this.props.match.url}/update-role/:id`} component={UpdateItem} />

                          

                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Roles;