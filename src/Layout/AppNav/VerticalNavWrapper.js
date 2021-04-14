import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect, Route } from "react-router-dom";

import MetisMenu from 'react-metismenu';

import { MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav, UsersNav, StoreNav, KitchenNav } from './NavItems';
import { useReducer } from 'react';
import { DashNav } from './NavItems';

class Nav extends Component {

    state = {};

    render() {

        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);

        if (user === null) {
            console.log("user is null");
            location.replace("#/login-page/login")
            location.reload()
            // <Route exact path="/" render={() => (<Redirect to="/login-page/login" />)} />
            // <Redirect to="/login-page/login" />;
        }
        else {
            const userId = user.role;
            console.log(user);
            console.log(userId);

            return (
                <Fragment>
                    {/* 
                <h5 className="app-sidebar__heading">Menu</h5>
                <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

                <h5 className="app-sidebar__heading">Dashboard and reports</h5>
                <MetisMenu content={DashNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                {/*
                <h5 className="app-sidebar__heading">UI Components</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Widgets</h5>
                <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Forms</h5>
                <MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Charts</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}

                    {/* Store Manager */}
                    {/* {(this.props.roles.role_id  === 1 || user.role === 2) && (
                    <>
                        <h5 className="app-sidebar__heading">User Management</h5> 
                        <MetisMenu content={UsersNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                    </>
                )} */}

                    {/* Store Manager */}
                    {/* {this.props.roles.role_id === 1 && (
                    <>
                        <h5 className="app-sidebar__heading">User Management</h5> 
                        <MetisMenu content={UsersNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                    </>
                )} */}

                    {userId === "1" ?
                        <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                        :
                        <div></div>}

                    {userId === "1" || userId === "2" ? (<div>
                        <h5 className="app-sidebar__heading">User</h5>
                        <MetisMenu content={UsersNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />

                    </div>
                    ) : (<div></div>)}

                    { userId === "1" || userId === "2" || userId === "3" ? (<div>
                        <h5 className="app-sidebar__heading">Store Management</h5>
                        <MetisMenu content={StoreNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                    </div>
                    ) : (<div></div>)}

                    {userId === "1" || userId === "2" || userId === "4" ? (<div>
                        <h5 className="app-sidebar__heading">Kitchen</h5>
                        <MetisMenu content={KitchenNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
                    </div>
                    ) : (<div></div>)}
                </Fragment>
            );
        }

    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}



export default withRouter(Nav);