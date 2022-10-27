/**
 *
 * UserList
 *
 */

import React from "react";
import { Table } from "reactstrap";

import { formatDate } from "../../../utils/date";
import UserRole from "../UserRole";

const UserList = (props) => {
  const { users } = props;

  return (
    <div className="u-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="bg-primary text-light text-center">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Provider</th>
            <th>Role</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {user?.firstName
                  ? `${user?.firstName} ${user?.lastName}`
                  : "N/A"}
              </td>
              <td>{user?.email}</td>
              <td>{user?.provider}</td>
              <td>
                <UserRole user={user} />
              </td>
              <td>{formatDate(user?.created)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {users.map((user, index) => (
        <div key={index} className="mt-3 px-4 py-3 user-box">
          <label className="text-black">Name</label>
          <p className="fw-medium">
            {user?.firstName ? `${user?.firstName} ${user?.lastName}` : "N/A"}
          </p>
          <label className="text-black">Email</label>
          <p>{user?.email}</p>
          <label className="text-black">Provider</label>
          <p>{user?.provider}</p>
          <label className="text-black">Account Created</label>
          <p>{formatDate(user?.created)}</p>
          <label className="text-black">Role</label>
          <p className="mb-0">
            <UserRole user={user} className="d-inline-block mt-2" />
          </p>
        </div>
      ))} */}
    </div>
  );
};

export default UserList;
