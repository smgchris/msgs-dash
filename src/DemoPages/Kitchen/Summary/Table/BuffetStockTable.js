import React from 'react';
import { Table, Button } from 'reactstrap';
import BuffetRow from '../Rows/buffetRow';
import BuffetRowHeader from '../Rows/buffetHeader';


import { connect} from 'react-redux';
import {fetchProducts} from '../../../../actions/productActions';
import {PropTypes} from 'prop-types'

 class BuffetTableBordered extends React.Component {

  componentDidMount() {
    
    fetchProducts
    
  }

  componentDidUpdate(nextProps){
    
    if(nextProps.newItem){
      this.props.items.unshift(nextProps.newItem);
    }
  }

  render() {
    console.log(this.props.items)
    const summary= this.props.items.map((item,index) => (
      <BuffetRow key={item.user_id} item={item} index={index}/>
    ))
    return (
      <Table className="mb-0" bordered>
        <BuffetRowHeader />
        <tbody>
          {summary}
          {/* <BuffetRow /> */}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchItems:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  newItem:PropTypes.object,
}

const mapStateToProps= state =>({
  items:state.products.items || [],
  newItem:state.products.item
})

const mapDispatchToProps= dispatch =>({
  fetchProducts:dispatch(fetchProducts())
})
                                                       

export default connect(mapStateToProps,mapDispatchToProps)(BuffetTableBordered);
