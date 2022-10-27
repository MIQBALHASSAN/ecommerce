/**
 *
 * AccountDetails
 *
 */

import React from "react";

import { Row, Col, Table, Badge } from "reactstrap";

import UserRole from "../UserRole";
import Input from "../../Common/Input";
import Button from "../../Common/Button";

const AccountDetails = (props) => {
  const { user, accountChange, updateProfile } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile();
  };

  return (
    <div className="account-details">
      <Table responsive bordered={true} className="text-center">
        <thead className="bg-primary text-light text-center">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Merchant</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.firstName}</td>
            <td>{user?.lastName}</td>
            <td>{user?.merchant}</td>
            <td>
              {user.provider === "email" ? (
                user.email
              ) : (
                <span className="provider-email">
                  Logged in With {user.provider}
                </span>
              )}
            </td>
            <td>
              <UserRole user={user} />
            </td>
            <td>
              <Badge color="info" pill className="admin_edit_btn">
                Edit
              </Badge>
            </td>
          </tr>
        </tbody>
      </Table>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs="12" md="6">
            <Input
              type={"text"}
              label={"First Name"}
              name={"firstName"}
              placeholder={"Please Enter Your First Name"}
              value={user.firstName ? user.firstName : ""}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="6">
            <Input
              type={"text"}
              label={"Last Name"}
              name={"lastName"}
              placeholder={"Please Enter Your Last Name"}
              value={user.lastName ? user.lastName : ""}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col>
          {/* TODO: update email feature to be added instead form change */}
          {/* <Col xs='12' md='6'>
            <Input
              type={'text'}
              label={'Email'}
              name={'email'}
              placeholder={'Please Enter Your Email'}
              value={user.email ? user.email : ''}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col> */}
          <Col xs="12" md="12">
            <Input
              type={"text"}
              label={"Phone Number"}
              name={"phoneNumber"}
              placeholder={"Please Enter Your Phone Number"}
              value={user.phoneNumber ? user.phoneNumber : ""}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className="profile-actions">
          <Button type="submit" variant="secondary" text="Save changes" />
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
