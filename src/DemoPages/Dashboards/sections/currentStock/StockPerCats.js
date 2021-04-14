import React from 'react'

import {
    Row, Col,
    CardBody,
    Progress,

} from 'reactstrap';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchProductCategs } from '../../../../actions/categoryActions';
import { fetchStockProducts } from '../../../../actions/stockProductActions';

class StockPerCats extends React.Component {

    componentDidMount() {
        this.props.fetchProductCategs()
        this.props.fetchStockProducts()
    }

    render() {
        const { currentStock, categories, fromdate, todate} = this.props;
        const stockSize = currentStock.length
        const catSize = categories.length

        var cats = [];


        for (const cat of categories) {

            if (todate !== '' && fromdate !== '') {
                const products = currentStock.filter(item => item.product.category_id === cat.category_id
                    &&new Date(item.created_date.split(' ')[0]).getTime()>=new Date(fromdate).getTime()&&new Date(item.created_date.split(' ')[0]).getTime()<=new Date(todate).getTime())
                cats.push({ category: cat, products: products, size: products.length })
            } 
            else {
                const products = currentStock.filter(item => item.product.category_id === cat.category_id)
                cats.push({ category: cat, products: products, size: products.length })
            }
        }

        cats.sort((a, b) => (a.size < b.size) ? 1 : -1);

        console.log(cats);

        var perc1, perc2, perc3, perc4 = 0

        if (cats[0] !== undefined)
            perc1 = (cats[0].size / stockSize * 100).toFixed(1);

        if (cats[1] !== undefined)
            perc2 = (cats[1].size / stockSize * 100).toFixed(1);

        if (cats[2] !== undefined)
            perc3 = (cats[2].size / stockSize * 100).toFixed(1);

        perc4 = (100 - (perc1 + perc2 + perc3)).toFixed(1);



        return (
            <CardBody className="pt-2">
                <Row className="mt-3">
                    <Col md="6">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                        <div className="widget-numbers fsize-3 text-muted">
                                            {!isNaN(perc1) ? perc1 : '0'}{'%'}
                                        </div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="text-muted opacity-6">
                                            {(typeof cats[0] != 'undefined') ? cats[0].category.category_name : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                        className="progress-bar-sm progress-bar-animated-alt"
                                        color="danger"
                                        value={!isNaN(perc1) ? perc1 : '0'} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                        <div className="widget-numbers fsize-3 text-muted">
                                            {!isNaN(perc2) ? perc2 : '0'}{'%'}
                                        </div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="text-muted opacity-6">
                                            {(typeof cats[1] != 'undefined') ? cats[1].category.category_name : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                        className="progress-bar-sm progress-bar-animated-alt"
                                        color="success"
                                        value={!isNaN(perc2) ? perc2 : '0'} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="divider mt-4" />
                <Row>
                    {typeof cats[2] != 'undefined' ?
                        <Col md="6">
                            <div className="widget-content">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left mr-3">
                                            <div className="widget-numbers fsize-3 text-muted">
                                                {!isNaN(perc3) ? perc3 : '0'}{'%'}
                                            </div>
                                        </div>
                                        <div className="widget-content-right">
                                            <div className="text-muted opacity-6">
                                                {(typeof cats[2] != 'undefined') ? cats[2].category.category_name : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-progress-wrapper mt-1">
                                        <Progress
                                            className="progress-bar-sm progress-bar-animated-alt"
                                            color="primary"
                                            value={!isNaN(perc3) ? perc3 : '0'} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        : ''}
                    <Col md="6">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                        <div className="widget-numbers fsize-3 text-muted">
                                            {!isNaN(perc4) ? perc4 : '0'}{'%'}
                                        </div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="text-muted opacity-6">
                                            Others
                                                                        </div>
                                    </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                        className="progress-bar-sm progress-bar-animated-alt"
                                        color="warning"
                                        value={!isNaN(perc4) ? perc4 : '0'} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        )
    }
}
const mapStateToProps = state => ({
    currentStock: state.stockProducts.currentStock,
    categories: state.prodCategories.items
})
export default connect(mapStateToProps, { fetchStockProducts, fetchProductCategs })(StockPerCats);