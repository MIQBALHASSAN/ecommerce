/**
 *
 * BrandList
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";

const BrandList = (props) => {
  const { brands, user } = props;
  console.log(brands);
  return (
    <div className="b-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="table_head_bg text-light text-center">
          <tr className="text-left">
            <th>Name</th>
            <th>Description</th>
            <th>Description</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand, index) => (
            <tr className="text-left" key={index}>
              <td>{brand.name}</td>
              <td>{brand.description}</td>
              <td>
                {brand?.merchant && brand?.merchant?._id !== user?.merchant && (
                  <div className="d-flex">
                    <label>By</label>
                    <p className="brand-merchant mb-0 ml-2 text-primary">
                      {brand.merchant.name}
                    </p>
                  </div>
                )}
              </td>
              <td>{brand.created}</td>
              <td>
                <Link to={`/dashboard/brand/edit/${brand._id}`} key={index}>
                  <Badge color="info" pill className="admin_edit_btn">
                    Edit
                  </Badge>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BrandList;
