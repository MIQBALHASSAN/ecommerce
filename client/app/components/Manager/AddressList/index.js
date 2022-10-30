/**
 *
 * AddressList
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";

import { AddressIcon, CheckIcon } from "../../Common/Icon";

const AddressList = (props) => {
  const { addresses } = props;
  // console.log(addresses);

  return (
    <div className="a-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="table_head_bg text-light text-center">
          <tr className="text-left">
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>zipCode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr className="text-left" key={index}>
              <td>
                {address.isDefault ? (
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="mb-0 mr-2 one-line-ellipsis">
                      Default Delivery Address
                    </h4>
                    <CheckIcon className="text-green" />
                  </div>
                ) : (
                  <h4 className="mb-0">Delivery Address</h4>
                )}
                {address?.address}
              </td>
              <td>{address?.city}</td>
              <td>{address?.state}</td>
              <td>{address?.country}</td>
              <td>{address?.zipCode}</td>
              <td>
                <Link
                  to={`/dashboard/address/edit/${address._id}`}
                  key={index}
                  className="d-block"
                >
                  <Badge color="info" pill className="admin_edit_btn">
                    Edit
                  </Badge>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {addresses.map((address, index) => (
        <Link
          to={`/dashboard/address/edit/${address._id}`}
          key={index}
          className="d-block"
        >
          <div className="d-flex align-items-center mb-3 address-box">
            <div className="mx-3">
              <AddressIcon />
            </div>
            <div className="flex-1 p-3 p-lg-4">
              {address.isDefault ? (
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-0 mr-2 one-line-ellipsis">
                    Default Delivery Address
                  </h4>
                  <CheckIcon className="text-green" />
                </div>
              ) : (
                <h4 className="mb-0">Delivery Address</h4>
              )}
              <p className="mb-2 address-desc">
                {`${address?.address} ${address?.city}, ${address?.country}, ${address?.zipCode}`}
              </p>
            </div>
          </div>
        </Link>
      ))} */}
    </div>
  );
};

export default AddressList;
