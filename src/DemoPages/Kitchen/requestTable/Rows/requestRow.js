import React from 'react';
import { Table, Button } from 'reactstrap';
import { deleteProduct } from '../../../../actions/productActions';
import { connect } from 'react-redux';
import { date } from 'faker';


class RequestRow extends React.Component {
  onDelete(id) {
    this.props.deleteProduct(id)
  }
  
  onUpdate(id){
    window.location.assign("#/kitchen/update-request/"+id)
 }
  render() {
    const { request,index } = this.props;

    if(!request.product){
      return <div/>
    }
    
    return (
      <tr>
        <th scope="row">{index+1}</th>
        <td>{request.user.names}</td> 
        <td>{request.product.product_name}</td>
        <td>{request.quantity}</td>
        <td>{request.comment}</td>
        <td>{request.due_date}</td>
        <td>{request.log_date}</td>
        <td>{(request.status ==="3")? <div>
          <div className="badge badge-warning">Pending</div> &nbsp;
          <Button outline className="mb-2 mr-2 btn-transition"
            color="primary" onClick={() => this.onUpdate(request.stocklog_id)}>update</Button>
            </div>:<div></div>}
        {(request.status ==="4")? <div className="badge badge-success">Approved</div>:<div></div>}
        {(request.status ==="5")? <div className="badge badge-danger">Declined</div>:<div></div>}
               
           {/* {
             <div>
               {request.status ==="3" (
               <div className="badge badge-warning">Pending</div>
               )}
             {request.status ==="4" && (
             <div className="badge badge-success">Approved</div>
             )}
              {request.status ==="5" && (
            <div className="badge badge-danger">declined</div>
             )}
             </div>
          } */}
          {/* <Button outline className="mb-2 mr-2 btn-transition"
            color="primary" onClick={() => this.onDelete(request.)}>Delete</Button> */}
          {/* <Button outline className="mb-2 mr-2 btn-transition"
            color="primary" onClick={() => this.onUpdate(request.stocklog_id)}>update</Button> */}
        </td>



      </tr>

    );
  }
}



export default connect(null, { deleteProduct })(RequestRow);