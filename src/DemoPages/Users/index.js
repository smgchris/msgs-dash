import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import UsersTable from './UsersTable/';


// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import AddUser from './AddUser';

class Users extends React.Component {

    state = {
        users: [
            {
                id: 1,
                username: 'munezero123',
                name: 'Munezero Gorilla',
                phone: '+250787161944',
                email: 'gorillla@munezero.com',
                role:'',
                department:''
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

                            {/* Users */}
                            
                                <Route path={`${this.props.match.url}/add-new-user`} component={AddUser} />
                                <Route path={`${this.props.match.url}/manage-users`} component={UsersTable} />
                          

                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Users;