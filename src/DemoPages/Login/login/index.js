import React, { Component } from "react";
import Logo from '../login/logo.png'
import {
  Button, Form,
  FormGroup, Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from "../../../actions/auth";
import { PropTypes } from 'prop-types'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({ loading: true });

    const { history } = this.props;

    this.props.login(this.state.username, this.state.password)
    
      .then(() => {
        // using the local storage
        const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.role;
    console.log(user);

                

        {
          userId === "5"  ? (<div> {history.push("/kitchen/buffet")} </div>
          ) : (<div></div>)
        }
        
        {
          userId === "6"  ? (<div> {history.push("/kitchen/buffet")} </div>
          ) : (<div></div>)
        }


        {
          userId === "1" || userId === "2" || userId === "4"  ? (<div> {history.push("/kitchen/front-end-orders")} </div>
          ) : (<div></div>)
        }

        {
          userId === "1" || userId === "2" || userId === "3" ? (<div> {history.push("/store/stock/manage-stock")} </div>
          ) : (<div></div>)
        }
        
        {
          userId === "1" || userId === "2" ? (<div> {history.push("/users/manage-users")} </div>
          ) : (<div></div>)
        }

        {
          userId === "1" ? (<div> {history.push("/dashboards/basic")} </div>
          ) : (<div></div>)
        }


        window.location.reload();

      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  }



  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  render() {
    const { loggingIn, message } = this.props;

    if (localStorage.getItem("user")) {
      //using hte local storage. change this to the 
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
      {
        userId === "1" || userId === "2" ? (<div> {location.replace("#/users/manage-users")} </div>
        ) : (<div></div>)
      }


      {
        userId === "1" || userId === "2" || userId === "3"  ? (<div> {location.replace("#/store/stock/manage-stock")} </div>
        ) : (<div></div>)
      }


      {
        userId === "1" || userId === "2"  || userId === "4" ? (<div> {location.replace("#/kitchen/front-end-orders")} </div>
        ) : (<div></div>)
      }

    }

    return (
      <div className="container col-lg-4 mt-10 " align="center">
        <div>
          <img src={Logo} alt="La Corniche" />
        </div>

        <h1 className="h3 font-weight-bold" >Please sign in to proceed</h1>
        {/* <Card> */}
        <div className="justify-content-center">
          <Form onSubmit={this.onSubmit}>

            {/* logo */}


            <div className="row ">
              <div className="col">
                <FormGroup>
                  <Label className="h3 mb-3 font-weight-normal">UserID</Label>
                  <Input bsSize="lg"
                    type="text"
                    name="username"
                    onChange={this.onChange}
                    placeholder="Enter UserID"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="h3 mb-3 font-weight-normal">Password</Label>
                  <Input bsSize="lg"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    placeholder="Enter Password"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <div className="text-center ">
                    <Button className="btn btn-info btn-lg " disabled={this.state.loading}>
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                Login
                </Button>
                  </div>
                </FormGroup>
              </div>
            </div>

          </Form>
        </div>
        {this.state.username}{loggingIn}

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </div>
    );
  }

}
// }

PropTypes.propTypes = {
  login: PropTypes.func.isrequired
}

function mapStateToProps(state) {
  const { loggingIn } = state.auth.isLoggedIn;
  const { message } = state.message;
  return {
    loggingIn,
    message,
  };
}

// const mapStateToProps= state =>({
//   loggingIn: state.auth.isLoggedIn,
//   message : state.message,
// })


export default connect(mapStateToProps, { login })(LoginForm);
