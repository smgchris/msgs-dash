import React, { Fragment } from 'react';
import {
  Row, Col,
  Card, CardBody,
  CardTitle, Input, FormGroup, Label, Button, Table
} from 'reactstrap';
import Message from '../../../templates/EditMessage'
import ItemRowHeader from '../Rows/ItemRowHeaderEntry'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import { fetchMessages } from '../../../../../actions/messageActions';



class ItemsTableBordered extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.items.filter(item=>item.approved!==1),
    };
    this.onChange = this.onChange.bind(this);

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  componentDidMount() {

    const { fetchMessages} = this.props

    fetchMessages()

  }

  render() {

    const editableMessages = this.state.messages.map((item, index) => (
      <Message size='9' editing={true} key={item.id} item={item} index={index} />
    ))
    return (
      <Fragment>
        
        <Row>
          {editableMessages}
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
  messages: state.messages.items || [],
})


export default connect(mapStateToProps, { fetchMessages })(ItemsTableBordered);