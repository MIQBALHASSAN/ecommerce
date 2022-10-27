/**
 *
 * ProductList
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Table, Badge } from "reactstrap";

const ProductList = (props) => {
  const { products } = props;
  console.log(products);
  return (
    <div className="p-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="bg-primary text-light text-center">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <img
                  className="item-image dashboard_image"
                  src={`http://localhost:8080/${
                    product && product.imageUrl
                      ? product.imageUrl
                      : "/images/placeholder-image.png"
                  }`}
                />
              </td>
              <td>
                <Link to={`/dashboard/product/edit/${product._id}`} key={index}>
                  <Badge color="info" pill className="admin_edit_btn">
                    Edit
                  </Badge>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {products.map((product, index) => (
        <Link
          to={`/dashboard/product/edit/${product._id}`}
          key={index}
          className="d-flex flex-row align-items-center mx-0 mb-3 product-box"
        >
          <img
            className="item-image"
            src={`http://localhost:8080/${
              product && product.imageUrl
                ? product.imageUrl
                : "/images/placeholder-image.png"
            }`}
          />
          <div className="d-flex flex-column justify-content-center px-3 text-truncate">
            <h4 className="text-truncate">{product.name}</h4>
            <p className="mb-2 text-truncate">{product.description}</p>
          </div>
        </Link>
      ))} */}
    </div>
  );
};

export default ProductList;
