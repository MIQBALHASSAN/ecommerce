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
        <thead className="table_head_bg text-light text-center">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Provider</th>
            <th>Role</th>
            <th>Created At</th>
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
    </div>
  );
};

export default UserList;
