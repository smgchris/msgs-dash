import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import DepartmentsTable from './DepartmentsTable';
import DeptUsersTable from './DeptUsersTable';

// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import AddDepartment from './AddDepartment';
import UpdateItem from './UpdateItem';
import UsersTable from './UsersTable';


class Departments extends React.Component {

    render() { 
        return (
            <Fragment>
                <AppHeader />
                <div className="app-main">
                    <AppSidebar />
                    <div className="app-main__outer">
                        <div className="app-main__inner">

                            {/* Departments*/}
                            
                                <Route path={`${this.props.match.url}/add-new-department`} component={AddDepartment} />
                                <Route path={`${this.props.match.url}/manage-departments`} component={DepartmentsTable} />
                                <Route path={`${this.props.match.url}/view-department-users/:dept_id/:name`} component={DeptUsersTable} />
                                <Route path={`${this.props.match.url}/:id/add-new-department-users/:name`} component={UsersTable} />
                                <Route path={`${this.props.match.url}/update-department/:dept_id`} component={UpdateItem} />
                          

                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Departments;