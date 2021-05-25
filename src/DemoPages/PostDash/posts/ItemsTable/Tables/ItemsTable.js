import React, { Fragment } from 'react';
import {
  Row, Col,
  Card, CardBody,
  CardTitle, Input, FormGroup, Label, Button, Table
} from 'reactstrap';
import Post from '../../../templates/Post'
import ItemRowHeader from '../Rows/ItemRowHeaderEntry'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import { fetchPosts } from '../../../../../actions/postActions';
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

    const { fetchPosts } = this.props

    fetchPosts()

  }
  componentDidUpdate(prevProps) {
    const { fetchPosts } = this.props
    // Typical usage (don't forget to compare props):
    if (this.props.items !== prevProps.items) {
      this.setState({
        items: this.props.items
      })

    }
    if (this.props.addingItem !== prevProps.addingItem) {
      fetchPosts()
    }


  }

  render() {
    const{visible}=this.state

    const posts = this.state.items.map((item, index) => (
      <Post editing={false} size="9" key={item.id} item={item} index={index} />
    ))
    return (
      <Fragment>
        <Row>
          
          {posts}
        </Row>

      </Fragment>

    );
  }
}

PropTypes.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object,
}

const mapStateToProps = state => ({
  items: state.posts.items || [],
  addingItem: state.posts.addingItem,
  deletingItem:state.posts.deletingItem
})


export default connect(mapStateToProps, { fetchPosts })(ItemsTableBordered);