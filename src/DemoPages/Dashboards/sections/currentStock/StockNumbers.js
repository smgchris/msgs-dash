import React from 'react'
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
import { connect } from 'react-redux';

import { fetchStockProducts } from '../../../../actions/stockProductActions';

class StockNumbers extends React.Component {

    render() {
        const { currentStock, stock, fromdate, todate } = this.props;

        var sumDebts = 0;
        var sumCurrent = 0;
        var sum = 0;
        var debts = stock.filter(item => item.paid === "0")
        var stock2 = stock


        if (fromdate !== '' && todate !== '') {
            debts = stock.filter(item => item.paid === "0"
                && new Date(item.created_date.split(' ')[0]).getTime() >= new Date(fromdate).getTime() && new Date(item.created_date.split(' ')[0]).getTime() <= new Date(todate).getTime())

            stock2 = stock.filter(item => new Date(item.created_date.split(' ')[0]).getTime() >= new Date(fromdate).getTime() && new Date(item.created_date.split(' ')[0]).getTime() <= new Date(todate).getTime())

        }
        console.log(debts)

        for (const debt of debts) {
            sumDebts += debt.unit_price * debt.entryQuantity
        }

        for (const current of currentStock) {
            sumCurrent += current.unit_price * current.quantity
        }

        for (const s of stock2) {
            sum += s.unit_price * s.entryQuantity
        }

        const reducted = sum - sumCurrent;


        function abbNum(value) {
            var newValue = value;
            if (value >= 1000) {
                var suffixes = ["", "k", "m", "b", "t"];
                var suffixNum = Math.floor(("" + value).length / 4);
                var shortValue = '';
                for (var precision = 2; precision >= 1; precision--) {
                    shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
                    var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
                    if (dotLessShortValue.length <= 2) { break; }
                }
                if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
                newValue = shortValue + suffixes[suffixNum];
            }
            return newValue;
        }

        function intToString(value) {
            var suffixes = ["", "k", "m", "b", "t"];
            var suffixNum = Math.floor(("" + value).length / 3);
            var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
            if (shortValue % 1 != 0) {
                shortValue = shortValue.toFixed(1);
            }
            return shortValue + suffixes[suffixNum];
        }

        return (
            <Row>
                <Col md="6">
                    <div className="card mb-3 bg-arielle-smile widget-chart text-white card-border">
                        <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg bg-white opacity-10" />
                            <i className="lnr-cross-circle icon-gradient bg-arielle-smile" />
                        </div>
                        <div className="widget-numbers">
                            {abbNum(sumDebts)}
                        </div>
                        <div className="widget-subheading">
                            Debts to Suppliers (RWF)
                                            </div>
                        <a href="/#/suppliers/manage-suppliers">
                            <div className="widget-description text-white">
                                {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                                <span className="pl-1">{((sumDebts / sum) * 100).toFixed(1)}% of all stock</span>
                            </div>
                        </a>
                    </div>
                </Col>
                <Col md="6">
                    <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                        <div className="icon-wrapper rounded">
                            <div className="icon-wrapper-bg bg-dark opacity-10" />
                            <i className="lnr-cart " />
                        </div>
                        <div className="widget-numbers">
                            {abbNum(sum)}
                        </div>
                        <div className="widget-subheading">
                            Total Stock Purchases (RWF)
                                            </div>
                        <a href="/#/store/stock/manage-stock">
                            <div className="widget-description text-white">
                                <FontAwesomeIcon icon={faArrowRight} />
                                <span className="pr-1"></span>
                            </div>
                        </a>
                    </div>
                </Col>
                <Col md="6">
                    <div className="card mb-3 bg-grow-early widget-chart text-white card-border">
                        <div className="icon-wrapper rounded">
                            <div className="icon-wrapper-bg bg-dark opacity-9" />
                            <i className="lnr-database text-white" />
                        </div>
                        <div className="widget-numbers">
                            {abbNum(sumCurrent)}
                        </div>
                        <div className="widget-subheading">
                            Current Stock Value (RWF)
                                            </div>
                        <a href="/#/store/stock/manage-stock">
                            <div className="widget-description text-white">
                                <FontAwesomeIcon icon={faArrowRight} />
                                <span className="pr-1"></span>
                            </div>
                        </a>
                    </div>
                </Col>
                <Col md="6">
                    <div className="card mb-3 bg-love-kiss widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-exit-up" />
                            </div>
                            <div className="widget-numbers">
                                {abbNum(reducted)}
                            </div>
                            <div className="widget-subheading">
                                Removed Stock (RWF)
                                                </div>
                         <a href="/#/store/dept-stock">
                            <div className="widget-description">
                                {/* <FontAwesomeIcon className="text-white opacity-5" icon={faAngleUp} /> */}
                                <span className="text-white">{((reducted / sum) * 100).toFixed(2)}% of all stock</span>
                            </div>
                         </a>
                        </div>

                    </div>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    currentStock: state.stockProducts.currentStock,
    stock: state.stockProducts.items
})
export default connect(mapStateToProps, { fetchStockProducts })(StockNumbers);