import React from 'react';
import { Table, Button } from 'reactstrap';



import { connect } from 'react-redux';
import { fetchStockProducts } from '../../../../actions/stockProductActions';
import { PropTypes } from 'prop-types';
import ItemRow from '../Rows/ItemRow';
import ItemRowHeader from '../Rows/ItemRowHeader'


class DebtsTable extends React.Component {
  componentDidMount() {
    const {fetchStockProducts}=this.props
    fetchStockProducts()
  }

  render() {
    
    var totalDebt=0;
    var count = 0;
    const stockProductsUnpaid = this.props.items.map((item) => {
      
      
      if (item.supplier_id === this.props.supplier_id && item.paid == 0) {
        count+=1;
        totalDebt+=parseInt(item.unit_price)*parseInt(item.entryQuantity)
        return <ItemRow key={item.stock_product_id} item={item} index={count} />
      }
    })

    return (
      <Table className="mb-0" bordered>
        <ItemRowHeader />
        <tbody>
          {stockProductsUnpaid}
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Debt</th>
            <th>{'Rwf '}{totalDebt}</th>
          </tr>
        </tbody>
      </Table>
    );
  }
}


const mapStateToProps = state => ({
  items: state.stockProducts.items,
})


export default connect(mapStateToProps, { fetchStockProducts })(DebtsTable);