import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment } from 'react';

import { connect } from 'react-redux'

import { ToastContainer } from 'react-toastify';
import Departments from '../../DemoPages/Departments';
import Roles from '../../DemoPages/Roles';
import Suppliers from '../../DemoPages/Suppliers';

const Dashboards = lazy(() => import('../../DemoPages/Dashboards'));

const Widgets = lazy(() => import('../../DemoPages/Widgets'));
const Elements = lazy(() => import('../../DemoPages/Elements'));
const Components = lazy(() => import('../../DemoPages/Components'));
const Charts = lazy(() => import('../../DemoPages/Charts'));
const Forms = lazy(() => import('../../DemoPages/Forms'));
const Tables = lazy(() => import('../../DemoPages/Tables'));


// const DefaultPage = lazy(() => import('../../DemoPages/Login'));
const MsgDash = lazy(() => import('../../DemoPages/MsgDash'));
const PostDash = lazy(() => import('../../DemoPages/PostDash'));
const FeedbackDash = lazy(() => import('../../DemoPages/FeedbackDash'));
const SettingsDash = lazy(() => import('../../DemoPages/SettingsDash'));
const UserDash = lazy(() => import('../../DemoPages/Users'));
const Store = lazy(() => import('../../DemoPages/Store'));
// const Products = lazy(() => import('../../DemoPages/Products'));
const Kitchen = lazy(() => import('../../DemoPages/Kitchen'));


const DefaultPage = lazy(() => import('../../DemoPages/Login'));

const AppMain = () => {

    return (
        <Fragment>

            {/* Components */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/components" component={Components} />
            </Suspense>

            {/* Forms */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Forms examples
                            <small>Because this is a demonstration we load at once all the Forms examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/forms" component={Forms} />
            </Suspense>

            {/* Charts */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Charts examples
                            <small>Because this is a demonstration we load at once all the Charts examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/charts" component={Charts} />
            </Suspense>

            {/* Tables */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Tables examples
                            <small>Because this is a demonstration we load at once all the Tables examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/tables" component={Tables} />
            </Suspense>

            {/* Elements */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Elements examples
                            <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/elements" component={Elements} />
            </Suspense>

            {/* Dashboard Widgets */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboard Widgets examples
                            <small>Because this is a demonstration we load at once all the Dashboard Widgets examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/widgets" component={Widgets} />
            </Suspense>

            {/* Dashboards */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load the Dashboard
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboards" component={Dashboards} />
            </Suspense>

            {/* shis*/}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load SHIS 
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/users" component={UserDash} />
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load SHIS 
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/messages" component={MsgDash} />
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load SHIS
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/posts" component={PostDash} />
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load SHIS
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/feeback" component={FeedbackDash} />
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load SHIS
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/settings" component={SettingsDash} />
            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load laCorniche
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/login-page" component={DefaultPage} />
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load laCorniche
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/store" component={Store} />

            </Suspense>
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait as we load laCorniche
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/kitchen" component={Kitchen} />
            </Suspense>

            {
                // <Route exact path="/" render={() => (<Redirect to="/dashboards/basic" />)} />
                <Route exact path="/" render={() => (<Redirect to="/login-page/login" />)} />
            }

            {/* <Route exact path="/" component={kitchen} /> */}
            
{/* 
            {this.props.auth.user_id == 1 && (
                <Route exact path="/dashboard" render={() => (<Redirect to="/dashboards/basic" />)} />
            )} 
            
             {(this.props.auth.islogged)? 
            <Route exact path="/dashboard" render={() => (<Redirect to="/dashboards/basic" />)} /> :
                <Route exact path="/" render={() => (<Redirect to="/login-page/login" />)} /> }*/}

            <ToastContainer />
        </Fragment>
    )
};
{/* {this.props.roles.role_id === 1 && (
                */}

const mapStateToProps = state => ({
    auth: state.auth.user
})
export default connect(mapStateToProps)(AppMain);