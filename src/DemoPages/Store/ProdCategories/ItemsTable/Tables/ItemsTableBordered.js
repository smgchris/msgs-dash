import React from 'react';
import { Table, Button } from 'reactstrap';
import ItemRow from '../Rows/ItemRow'
import ItemRowHeader from '../Rows/ItemRowHeader'

import { connect} from 'react-redux';
import {PropTypes} from 'prop-types'
import { fetchProductCategs } from '../../../../../actions/categoryActions';

 class ItemsTableBordered extends React.Component {

  componentDidMount() {
    
    fetchProductCategs
    
  }


  render() {
    console.log(this.props)
    const productCategItems= this.props.items.map(item => (
      <ItemRow key={item.category_id} item={item} />
    ))
    return (
      <Table className="mb-0" bordered>
        <ItemRowHeader />
        <tbody>
          {productCategItems}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes ={
  fetchProductCategs:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  newItem:PropTypes.object,
}

const mapStateToProps= state =>({
  items:state.prodCategories.items || [],
  newItem:state.prodCategories.item
})

const mapDispatchToProps= dispatch =>({
  fetchProductCategs:dispatch(fetchProductCategs())
})
                                                       
export default connect(mapStateToProps,mapDispatchToProps)(ItemsTableBordered);