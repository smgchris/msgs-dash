import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../../Layout/AppMain/PageTitle3';
import EditTable from './Tables/EditTable';
import ApprovedTable from './Tables/ApprovedTable';
import { fetchMessages } from '../../../../actions/messageActions';
import { connect } from 'react-redux';


const tabsContent = [
    
    {
        title: 'Approved',
        content: 
    
                <ApprovedTable/>
            
    },
    {
        title: 'Editing',
        content: 
        
            
                <EditTable/>
            
        
    }
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}


class ItemsTable extends React.Component {
    state = {
        buttonOptions: [
            {
                id: 1,
                text: 'Add new Message',
                uri: 'add-new-message',
                icon: 'faPlusCircle'
            }
        ]
    }
    componentDidMount() {

        const { fetchMessages} = this.props
    
        fetchMessages()
    
      }
    render() {
        return (
            <Fragment>
                <PageTitle
                heading="My Messages"
                subheading=""
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                buttonOptions={this.state.buttonOptions}

            />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messages.items || [],
  })
  
export default connect(mapStateToProps, { fetchMessages })(ItemsTable);
