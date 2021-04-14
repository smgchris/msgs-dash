import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle3';
import AddUser from '../AddUser';


import UsersTableBordered from './Tables/UsersTableBordered';



class UsersTable extends React.Component {
    state = {
        buttonOptions: [
            {
                id: 1,
                text: 'Add new User',
                uri: 'add-new-user',
                icon: 'faPlusCircle'
            }
        ],

        users:[
            {
                id: 1,
                username: 'munezero123',
                name: 'Munezero Gorilla',
                phone: '+250787161944',
                email: 'gorillla@munezero.com',
                address:'Nyaruguru',
                role:'',
                department:''
            }
        ]
    }

    // delete user
    delUser=(id) =>{
        this.setState({users:[...this.state.users.filter(user=> user.id!==id)]})
    }
    render() { 
        return <Fragment>
            <PageTitle
                heading="Platform Users"
                subheading="Registered users from various departments"
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                buttonOptions={this.state.buttonOptions}

            />
            
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col lg="12">
                        
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Users</CardTitle>
                                <UsersTableBordered delUser={this.delUser} users={this.state.users}/>
                                
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}


export default UsersTable;
