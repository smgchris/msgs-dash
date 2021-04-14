import React, { Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../../Layout/AppMain/PageTitle3';
import CurrentTable from './Tables/CurrentTable';
import EntryTable from './Tables/EntryTable';


const tabsContent = [
    {
        title: 'Current Stock ',
        content: 
        <Card className="main-card mb-3">
            <CardBody>
                <CurrentTable/>
            </CardBody>
        </Card>
    },
    {
        title: 'Stock at Entry',
        content: 
        <Card className="main-card mb-3">
            <CardBody>
                <EntryTable/>
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
            {
                id: 1,
                text: 'Add new Stock product',
                uri: 'add-new-stock-product',
                icon: 'faPlusCircle'
            }
        ]
    }
    render() {
        return (
            <Fragment>
                <PageTitle
                heading="Stock"
                subheading="Products in the stock"
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
                buttonOptions={this.state.buttonOptions}

            />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        )
    }
}


export default ItemsTable;
