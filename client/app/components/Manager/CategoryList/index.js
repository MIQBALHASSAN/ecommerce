/**
 *
 * CategoryList
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";

const CategoryList = (props) => {
  const { categories } = props;
  // console.log(categories);
  return (
    <div className="c-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="table_head_bg text-light text-center">
          <tr className="text-left">
            <th>Name</th>
            <th>Description</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr className="text-left" key={index}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{category.created}</td>
              {/* <td>
                <img
                  className="item-image dashboard_image"
                  src={`http://localhost:8080/${
                    product && product.imageUrl
                      ? product.imageUrl
                      : "/images/placeholder-image.png"
                  }`}
                />
              </td> */}
              <td>
                <Link
                  to={`/dashboard/category/edit/${category._id}`}
                  key={index}
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
    </div>
  );
};

export default CategoryList;
