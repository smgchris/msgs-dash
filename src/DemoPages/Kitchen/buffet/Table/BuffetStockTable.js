import React from 'react';
import { Table, Button } from 'reactstrap';
import BuffetRow from '../Rows/buffetRow';
import BuffetRowHeader from '../Rows/buffetHeader';


import { connect } from 'react-redux';
import { fetchBuffet } from '../../../../actions/kitchenActions';
import { PropTypes } from 'prop-types'

class BuffetTableBordered extends React.Component {

  componentDidMount() {

    fetchBuffet

  }

  componentDidUpdate(nextProps) {

    if (nextProps.newItem) {
      this.props.items.unshift(nextProps.newItem);
    }
  }

  render() {
    console.log(this.props.items)
    const buffetItems = this.props.items.map((item, index) => (
      <BuffetRow key={item.user_id} item={item} index={index} />
    ))
    return (
      <Table className="mb-0" bordered>
        <BuffetRowHeader />
        <tbody>
          {buffetItems}
          {/* <BuffetRow /> */}
        </tbody>
      </Table>
    );
  }
}

PropTypes.propTypes = {
  fetchBuffet: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object,
}

const mapStateToProps = state => ({
  items: state.kitchen.items || [],
  newItem: state.kitchen.item
})

const mapDispatchToProps = dispatch => ({
  fetchBuffet: dispatch(fetchBuffet())
})


export default connect(mapStateToProps, mapDispatchToProps)(BuffetTableBordered);
