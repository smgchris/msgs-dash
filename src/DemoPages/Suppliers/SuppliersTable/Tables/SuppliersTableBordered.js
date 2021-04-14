import React from 'react';
import { Table, Button } from 'reactstrap';
import SupplierRow from '../Rows/SupplierRow'
import SupplierRowHeader from '../Rows/SupplierRowHeader'


import { connect} from 'react-redux';
import {fetchSuppliers} from '../../../../actions/supplierActions';
import {PropTypes} from 'prop-types'

class SuppliersTableBordered extends React.Component {
  componentDidMount() {
    this.props.fetchSuppliers();
  }

  render() {
    return (
      <Table className="mb-0" bordered>
        <SupplierRowHeader />
        <tbody>
          {
            this.props.suppliers.map((supplier,index) => (

              <SupplierRow supplier={supplier} index={index}/>

            ))
          }

        </tbody>
      </Table>
    );
  }
}
PropTypes.propTypes ={
  fetchSuppliers:PropTypes.func.isRequired,
  suppliers:PropTypes.array.isRequired,
  newSupplier:PropTypes.object
}

const mapStateToProps= state =>({
  suppliers:state.suppliers.items,
  newSupplier:state.suppliers.item
})
export default connect(mapStateToProps,{fetchSuppliers})(SuppliersTableBordered);