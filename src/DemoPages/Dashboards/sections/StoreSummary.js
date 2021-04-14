import React from 'react';
import { Fragment } from 'react';
import {
    Row, Col,
    CardHeader,
    Card,
    TabContent,
    TabPane,
} from 'reactstrap';


import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StockGraph from './currentStock/StockGraph';
import StockPerCats from './currentStock/StockPerCats';
import StockNumbers from './currentStock/StockNumbers'

class StoreSummary extends React.Component {

    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {
        return (
            <Row>
                <Col md="12" lg="6">
                    <Card className="mb-3">
                        <CardHeader className="card-header-tab">
                            <div className="card-header-title">
                                <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            CURRENT STOCK SUMMARY
                                        </div>

                        </CardHeader>
                        <TabContent activeTab={this.state.activeTab1}>
                            <TabPane tabId="11">
                                <StockPerCats></StockPerCats>
                                <StockGraph></StockGraph>
                            </TabPane>

                        </TabContent>
                    </Card>

                </Col>
                <Col md="12" lg="6">
                    <StockNumbers></StockNumbers>

                </Col>
            </Row>
        )
    }
}

export default StoreSummary