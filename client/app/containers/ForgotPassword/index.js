/*
 *
 * ForgotPassword
 *
 */

import React from "react";
import { connect } from "react-redux";

import { Row, Col } from "reactstrap";
import { Redirect, Link } from "react-router-dom";

import actions from "../../actions";

import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";

class ForgotPassword extends React.PureComponent {
  render() {
    const {
      authenticated,
      forgotFormData,
      formErrors,
      forgotPasswordChange,
      forgotPassowrd,
    } = this.props;

    if (authenticated) return <Redirect to="/dashboard" />;

    const handleSubmit = (event) => {
      event.preventDefault();
      forgotPassowrd();
    };

    return (
      <div className="forgot-password-form">
        <div className="d-flex justify-content-center align-items-center">
          <h3>Forgot Password</h3>
          {/* <Link className="redirect-link" to={"/login"}>
            Back to login
          </Link> */}
        </div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs="12">
              <div className="forgot-password-form-wrap d-flex justify-content-center">
                <Input
                  custom_class={"forgot_input"}
                  type={"text"}
                  error={formErrors["email"]}
                  // label={"Email Address"}
                  name={"email"}
                  placeholder={"Please Enter Your Email"}
                  value={forgotFormData.email}
                  onInputChange={(name, value) => {
                    forgotPasswordChange(name, value);
                  }}
                />
                <Button
                  type="submit"
                  // variant="primary"
                  text="Send Email"
                  // className="mb-3 mb-md-0"
                  className={"forgot_btn"}
                />
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated,
    forgotFormData: state.forgotPassword.forgotFormData,
    formErrors: state.forgotPassword.formErrors,
  };
};

export default connect(mapStateToProps, actions)(ForgotPassword);
