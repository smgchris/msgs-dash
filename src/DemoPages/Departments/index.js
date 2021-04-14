import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Tables

import DepartmentsTable from './DepartmentsTable';


// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import AddDepartment from './AddDepartment';

class Departments extends React.Component {

    state = {
        departments: [
            {
                id: 1,
                name: 'kitchen',
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

                            {/* Departments*/}
                            
                                <Route path={`${this.props.match.url}/add-new-department`} component={AddDepartment} />
                                <Route path={`${this.props.match.url}/manage-departments`} component={DepartmentsTable} />
                          

                        </div>
                        <AppFooter />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Departments;