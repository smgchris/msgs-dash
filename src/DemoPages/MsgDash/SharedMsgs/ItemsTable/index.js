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


const tabsContent = [
    {
        title: 'Editing',
        content: 
        
            
                <EditTable/>
            
        
    },
    {
        title: 'Approved',
        content: 
    
                <ApprovedTable/>
            
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
    render() {
        return (
            <Fragment>
                <PageTitle
                heading="Shared Messages With Collaborators"
                subheading=""
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                buttonOptions={this.state.buttonOptions}

            />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        )
    }
}


export default ItemsTable;
