import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../../Layout/AppMain/PageTitle2';
import PendingTable from './Tables/pendingTable';
import ApprovedTable from './Tables/approvedTable';
import RejectedTable from './Tables/declinedTable'
import { connect} from 'react-redux';
import { fetchStockLogs } from '../../../../actions/stockLogActions';


const tabsContent = [
    {
        title: 'Pending ',
        content: 
        <Card className="main-card mb-3">
            <CardBody>
                <PendingTable/>
            </CardBody>
        </Card>
    },
    {
        title: 'Approved',
        content: 
        <Card className="main-card mb-3">
            <CardBody>
                <ApprovedTable/>
            </CardBody>
        </Card>
    },
    {
        title: 'Declined',
        content:
        <Card className="main-card mb-3">
            <CardBody>
                <RejectedTable/>
            </CardBody>
        </Card>
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
        
        ]
    }
    componentDidMount() {
    
        this.props.fetchStockLogs()
        
      }
    render() {
        return (
            <Fragment>
                <PageTitle
                heading="Requisitions"
                subheading="Stock requests"
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                buttonOptions={this.state.buttonOptions}

            />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        )
    }
}


export default  connect(null,{fetchStockLogs})(ItemsTable);
