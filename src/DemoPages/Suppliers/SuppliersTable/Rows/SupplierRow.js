import React from 'react';
import { Table, Button } from 'reactstrap';

export default class SupplierRow extends React.Component {
  onUpdate(id){
    window.location.assign("#/suppliers/update-supplier/"+id)
 }
 onViewDebts(id,name){
  window.location.assign("#/suppliers/debts/"+id+"/"+name)
}
  render() {
    const {supplier,index}=this.props;
    return (
     
          <tr>
            <th scope="row">{index+1}</th>
            <td>{supplier.supplier_name}</td>
            <td>{supplier.phone}</td>
            <td>{supplier.email}</td>
            <td>{supplier.location}</td>
            <td>{supplier.created_date}</td>
            <td>
              <Button outline className="mb-2 mr-2 btn-transition" color="primary" onClick={()=>this.onUpdate(supplier.supplier_id)}>Update</Button>
              <Button outline className="mb-2 mr-2 btn-transition" color="primary" onClick={()=>this.onViewDebts(supplier.supplier_id, supplier.supplier_name)}>View Debts</Button>
              </td>
          </tr>
         
    );
  }
}
