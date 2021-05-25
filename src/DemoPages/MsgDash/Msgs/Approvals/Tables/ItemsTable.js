import React, { Fragment } from 'react';
import {
  Row, Col,
  Card, CardBody,
  CardTitle, Input, FormGroup, Label, Button, Table
} from 'reactstrap';
import Message from '../../../templates/ApproveMessage'
import ItemRowHeader from '../Rows/ItemRowHeaderEntry'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import { fetchMessages } from '../../../../../actions/messageActions';
import { Alert } from 'reactstrap';



class ItemsTableBordered extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items,
     

    };
    this.onChange = this.onChange.bind(this);



  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {

    const { fetchMessages } = this.props

    fetchMessages()

  }
  componentDidUpdate(prevProps) {
    const { fetchMessages } = this.props
    // Typical usage (don't forget to compare props):
    if (this.props.items !== prevProps.items) {
      this.setState({
        items: this.props.items
      })

    }
    if (this.props.addingItem !== prevProps.addingItem) {
      fetchMessages()
    }


  }

  render() {
    const{visible}=this.state

    const messages = this.state.items.map((item, index) => (
      <Message editing={false} size="9" key={item.id} item={item} index={index} />
    ))
    return (
      <Fragment>
        <Row>
          
          {messages}
        </Row>

      </Fragment>

    );
  }
}

PropTypes.propTypes = {
  fetchMessages: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object,
}

const mapStateToProps = state => ({
  items: state.messages.items || [],
  addingItem: state.messages.addingItem,
})


export default connect(mapStateToProps, { fetchMessages })(ItemsTableBordered);