import React from 'react';
import { Fragment } from 'react';
import {
    Row, Col,
    CardHeader,
    Card, CardBody,
    TabContent,
    TabPane,
    Input, FormGroup, Label, Button
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
            fromdate: '',
            todate: '',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

        this.onChange = this.onChange.bind(this);

    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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
            <Fragment>
                <Row>
                    <Col md="12" lg="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <Row>

                                    <Col lg='6'>
                                        <FormGroup>
                                            <Label for="fromdate">From</Label>
                                            <Input type="date" name="fromdate" onChange={this.onChange} required />
                                        </FormGroup>

                                    </Col>
                                    <Col lg='6'>
                                        <FormGroup>
                                            <Label for="todate">To</Label>
                                            <Input type="date" name="todate" onChange={this.onChange} min={this.state.fromdate} required />
                                        </FormGroup>

                                    </Col>


                                </Row>


                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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
                                    <StockPerCats fromdate={this.state.fromdate} todate={this.state.todate}></StockPerCats>
                                    <StockGraph fromdate={this.state.fromdate} todate={this.state.todate}></StockGraph>
                                </TabPane>

                            </TabContent>
                        </Card>

                    </Col>
                    <Col md="12" lg="6">
                        <StockNumbers fromdate={this.state.fromdate} todate={this.state.todate}></StockNumbers>

                    </Col>
                </Row>
            </Fragment>

        )
    }
}

export default StoreSummary