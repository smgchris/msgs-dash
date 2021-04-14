import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Input, FormGroup, Label, Button
} from 'reactstrap';

import PageTitle from '../../../../Layout/AppMain/PageTitle3';
import ItemsTableBordered from './Tables/ItemsTableBordered';
import { fetchStockLogs } from '../../../../actions/stockLogActions';
import { connect } from 'react-redux';
import { fetchDepts } from '../../../../actions/deptActions';
import { fetchProducts } from '../../../../actions/productActions';
import DeptStockTable from './Tables/DeptStockTable';



class ItemsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dept: '',
            product: '',
            dept_name: '',
            fromdate: '',
            todate: '',
            deptStockLog: this.props.stockLog.filter(item => item.status === "4"),
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        

    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onClick(e) {


        if (this.state.dept !== ''&&this.state.todate !== '' && this.state.fromdate !== ''&&this.state.product !== '')
            this.setState({
                deptStockLog: this.props.stockLog.filter(item =>item.status === "4"&&item.department.department_id === this.state.dept
                && item.log_date >= this.state.fromdate && item.log_date <= this.state.todate + 1&& item.product.product_id === this.state.product)
            })
        else if (this.state.dept !== ''&&this.state.todate !== '' && this.state.fromdate !== '')
            this.setState({
                deptStockLog: this.props.stockLog.filter(item =>item.status === "4"&&item.department.department_id === this.state.dept
                && item.log_date >= this.state.fromdate && item.log_date <= this.state.todate + 1)
        })
        else if (this.state.product !== ''&&this.state.product !== '')
            this.setState({
                deptStockLog: this.props.stockLog.filter(item =>item.status === "4"&&item.product.product_id === this.state.product )
        })
        else if (this.state.product !== ''&&this.state.todate !== '' && this.state.fromdate !== '')
            this.setState({
                deptStockLog: this.props.stockLog.filter(item =>item.status === "4"&& item.product.product_id === this.state.product
                && item.log_date >= this.state.fromdate && item.log_date <= this.state.todate + 1)
        })
        else if (this.state.dept !== '')
            this.setState({
                deptStockLog: this.props.stockLog.filter(item =>item.status === "4"&&item.department.department_id === this.state.dept)
        })
        else if (this.state.todate !== '' && this.state.fromdate !== '')
            this.setState({
                deptStockLog: this.props.stockLog.filter(item =>item.status === "4"&& item.log_date >= this.state.fromdate && item.log_date <= this.state.todate + 1)
            })
        else if (this.state.product !== '')
            this.setState({
                deptStockLog: this.props.stockLog.filter(item =>item.status === "4"&& item.product.product_id === this.state.product)
            })

    }
    componentDidMount() {
        const { fetchStockLogs, fetchDepts, fetchProducts } = this.props

        fetchStockLogs()
        fetchDepts()
        fetchProducts()

        this.setState({ deptStockLog: this.props.stockLog.filter(item => item.status === "4") })

    }

    render() {
        return <Fragment>
            <Row>
                <Col lg="12">

                    <Card className="main-card mb-3">
                        <CardBody>
                            <Row>
                                <Col lg='3'>
                                    <FormGroup>
                                        <Label>Department</Label>
                                        <Input type="select" name="dept" onChange={this.onChange} value={this.state.value} required>
                                            <option value="">All</option>
                                            {
                                                this.props.depts.map((dept) => (

                                                    <option value={dept.department_id}>{dept.department_name}</option>

                                                ))
                                            }
                                        </Input>

                                    </FormGroup>
                                </Col>
                                <Col lg='3'>
                                    <FormGroup>
                                        <Label>Product</Label>
                                        <Input type="select" name="product" onChange={this.onChange} value={this.state.value} required>
                                            <option value="">All</option>
                                            {
                                                this.props.products.map((product) => (

                                                    <option value={product.product_id}>{product.product_name}</option>

                                                ))
                                            }
                                        </Input>

                                    </FormGroup>

                                </Col>

                                <Col lg='2'>
                                    <FormGroup>
                                        <Label for="fromdate">From</Label>
                                        <Input type="date" name="fromdate" onChange={this.onChange} required />
                                    </FormGroup>

                                </Col>
                                <Col lg='2'>
                                    <FormGroup>
                                        <Label for="todate">To</Label>
                                        <Input type="date" name="todate" onChange={this.onChange} min={this.state.fromdate} required />
                                    </FormGroup>

                                </Col>
                                <Col lg='2'>
                                    <FormGroup>
                                        <br />
                                        <Button className="btn btn-info btn-lg" onClick={this.onClick}>Filter</Button>
                                    </FormGroup>

                                </Col>


                            </Row>


                        </CardBody>
                    </Card>
                </Col>

            </Row>

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
                                {this.state.deptStockLog[0] !== undefined ? <CardTitle>Stock {this.state.dept !== '' ? 'in ' + this.props.depts[0].department_name : 'in all departments'}</CardTitle> : <div></div>}
                                <DeptStockTable deptStockLog={this.state.deptStockLog} />

                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    }
}

const mapStateToProps = state => ({
    depts: state.depts.items,
    stockLog: state.stockLog.items || [],
    products: state.products.items || []
})
export default connect(mapStateToProps, { fetchDepts, fetchStockLogs, fetchProducts })(ItemsTable);
