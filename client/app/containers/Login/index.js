/*
 *
 * Login
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import actions from "../../actions";

import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import SignupProvider from "../../components/Common/SignupProvider";
import { allimages } from "../../../assets/image.js";
import "./login.css";
class Login extends React.PureComponent {
  render() {
    const {
      authenticated,
      loginFormData,
      loginChange,
      login,
      formErrors,
      isLoading,
      isSubmitting,
    } = this.props;

    if (authenticated) return <Redirect to="/dashboard" />;

    const registerLink = () => {
      this.props.history.push("/register");
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      login();
    };

    return (
      <div className="login-form shadow">
        <Row>
          <Col xs={{ size: 12 }} md={{ size: 6 }} lg={{ size: 6 }}>
            <div className="login-page-image">
              <img src={allimages.loginBannergiff} alt="image" />
            </div>
          </Col>
          <Col
            xs={{ size: 12 }}
            md={{ size: 6 }}
            lg={{ size: 6 }}
            className="d-flex flex-column justify-content-center align-items-center pr-5"
          >
            {isLoading && <LoadingIndicator />}
            <h2 className="login-form-title">Sign in with Email address</h2>
            <div className="login-from-new-user">
              New user?
              <Button
                text="Create an account"
                variant="link"
                className="ml-md-3"
                onClick={registerLink}
              />
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col xs="12" md="12">
                  <Input
                    type={"text"}
                    error={formErrors["email"]}
                    label={"Email Address"}
                    name={"email"}
                    placeholder={"Please Enter Your Email"}
                    value={loginFormData.email}
                    onInputChange={(name, value) => {
                      loginChange(name, value);
                    }}
                  />
                </Col>
                <Col xs="12" md="12">
                  <Input
                    type={"password"}
                    error={formErrors["password"]}
                    label={"Password"}
                    name={"password"}
                    placeholder={"Please Enter Your Password"}
                    value={loginFormData.password}
                    onInputChange={(name, value) => {
                      loginChange(name, value);
                    }}
                  />
                </Col>
                {/* <Col
                  xs={{ size: 12, order: 1 }}
                  md={{ size: "6", order: 2 }}
                  className="mb-2 mb-md-0"
                >
                  <SignupProvider />
                </Col> */}
              </Row>
              <div className="d-flex flex-column ">
                <Link
                  className="forgot-password-link py-3 ml-auto"
                  to={"/forgot-password"}
                >
                  Forgot Password?
                </Link>
                <div className="d-flex justify-content-between align-items-center mb-3 mb-md-0">
                  <Button
                    type="submit"
                    variant=""
                    className="login-form-submit-btn"
                    text="Login"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated,
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
    isSubmitting: state.login.isSubmitting,
  };
};

export default connect(mapStateToProps, actions)(Login);
