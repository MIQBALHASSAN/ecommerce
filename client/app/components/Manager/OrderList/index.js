/**
 *
 * OrderList
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";

import { formatDate } from "../../../utils/date";

const OrderList = (props) => {
  const { orders } = props;
  // console.log(orders);
  const renderFirstItem = (order) => {
    if (order.products) {
      const product = order.products[0].product;
      return (
        <img
          className="item-image"
          src={`http://localhost:8080/${
            product && product?.imageUrl
              ? product?.imageUrl
              : "/images/placeholder-image.png"
          }`}
        />
      );
    } else {
      return <img className="item-image" src="/images/placeholder-image.png" />;
    }
  };

  return (
    <div className="order-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="table_head_bg text-light text-center">
          <tr className="text-left">
            <th>Order #</th>
            <th>SKU ID</th>
            <th>Quantity</th>
            <th>Name</th>
            <th>Brand Name</th>
            <th>Image</th>
            <th>Ordered on</th>
            <th>Order Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr className="text-left" key={index}>
              <td>{order._id}</td>
              <td>{order?.products[0].product.sku}</td>
              <td>{order?.products[0].quantity}</td>
              <td>{order?.products[0].product.name}</td>
              <td>{order?.products[0].product.brand.name}</td>
              <td className="order_list_image">{renderFirstItem(order)}</td>
              <td>{formatDate(order.created)}</td>
              <td>{order?.totalWithTax ? order?.totalWithTax : 0}</td>
              <td>
                {order?.products ? (
                  <span className="order-label order-status">{` ${order?.products[0].status}`}</span>
                ) : (
                  <span className="order-label order-status">{` Unavailable`}</span>
                )}
              </td>
              <td>
                <Link to={`/order/${order._id}`} className="d-block box-link">
                  <Badge color="info" pill className="admin_edit_btn">
                    Edit
                  </Badge>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {orders.map((order, index) => (
        <div key={index} className="order-box">
          <Link to={`/order/${order._id}`} className="d-block box-link">
            <div className="d-flex flex-column flex-lg-row mb-3">
              <div className="order-first-item p-lg-3">
                {renderFirstItem(order)}
              </div>
              <div className="d-flex flex-column flex-xl-row justify-content-between flex-1 ml-lg-2 mr-xl-4 p-3">
                <div className="order-details">
                  <div className="mb-1">
                    <span>Status</span>
                    {order?.products ? (
                      <span className="order-label order-status">{` ${order?.products[0].status}`}</span>
                    ) : (
                      <span className="order-label order-status">{` Unavailable`}</span>
                    )}
                  </div>
                  <div className="mb-1">
                    <span>Order #</span>
                    <span className="order-label">{` ${order._id}`}</span>
                  </div>
                  <div className="mb-1">
                    <span>Ordered on</span>
                    <span className="order-label">{` ${formatDate(
                      order.created
                    )}`}</span>
                  </div>
                  <div className="mb-1">
                    <span>Order Total</span>
                    <span className="order-label">{` $${
                      order?.totalWithTax ? order?.totalWithTax : 0
                    }`}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default OrderList;
