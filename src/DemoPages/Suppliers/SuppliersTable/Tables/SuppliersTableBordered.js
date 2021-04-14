import React from 'react';
import { Table, Button } from 'reactstrap';
import SupplierRow from '../Rows/SupplierRow'
import SupplierRowHeader from '../Rows/SupplierRowHeader'

export default class SuppliersTableBordered extends React.Component {
  render() {
    return (
      <Table className="mb-0" bordered>
        <SupplierRowHeader />
        <tbody>
          {
            this.props.suppliers.map((supplier) => (

              <SupplierRow delSupplier={this.props.delSupplier} supplier={supplier} />

            ))
          }

        </tbody>
      </Table>
    );
  }
}
