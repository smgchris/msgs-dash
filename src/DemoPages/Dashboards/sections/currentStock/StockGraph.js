import React from 'react'

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { fetchStockProducts } from '../../../../actions/stockProductActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Page C', uv: 2000, pv: 6800, amt: 2290 },
    { name: 'Page D', uv: 4780, pv: 7908, amt: 2000 },
    { name: 'Page E', uv: 2890, pv: 9800, amt: 2181 },
    { name: 'Page F', uv: 1390, pv: 3800, amt: 1500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }

];

class StockGraph extends React.Component {


    render() {
        const { stock, currentStock } = this.props;

        var d = new Date();

        var data2 = []

        let today = d.toISOString().slice(0, 10)
                
        if (typeof stock[0] != 'undefined') {
            
            for (var i = 0; i < 7; i++) {
                var cdate=new Date(new Date().setDate(new Date().getDate()-i)).toISOString().slice(0, 10)
                const products = stock.filter(item => item.created_date.split(' ')[0] == cdate)
                
                var sum = 0
                for (const product of products) {
                    sum += (product.unit_price * product.entryQuantity)
                }

                data2.push({ date: cdate, uv: sum })
            }
        }

        data2.sort((a, b) => (a.date > b.date) ? 1 : -1);

        console.log(data2);

        return (
            <div className="widget-chart p-0">
                <div className="widget-chart-content">
                    <div className="widget-description mt-0 text-warning">
                        {/* <FontAwesomeIcon icon={faArrowLeft} />
                        <span className="pl-1">62.5%</span> */}
                        <span className="text-muted opacity-8 pl-1">Stock purchases in the past 7 days</span>
                    </div>
                </div>
                <ResponsiveContainer height={187}>
                    <AreaChart data={data2} margin={{ top: -1, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7} />
                                <stop offset="90%" stopColor="var(--warning)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type='monotoneX' dataKey='uv' stroke='var(--warning)' strokeWidth={2} fillOpacity={1}
                            fill="url(#colorPv2)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    currentStock: state.stockProducts.currentStock,
    stock: state.stockProducts.items
})
export default connect(mapStateToProps, { fetchStockProducts })(StockGraph);