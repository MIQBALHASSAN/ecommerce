/**
 *
 * OrderItems
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Row, Col, DropdownItem } from "reactstrap";

import { ROLE_ADMIN } from "../../../constants";
import Button from "../../Common/Button";
import DropdownConfirm from "../../Common/DropdownConfirm";

const OrderItems = (props) => {
  const { order, user, updateOrderItemStatus } = props;
  console.log(order);
  const renderPopoverContent = (item) => {
    const statuses = [
      "Not processed",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        {statuses.map((s, i) => (
          <DropdownItem
            key={`${s}-${i}`}
            className={s === item?.status ? "active" : ""}
            onClick={() => updateOrderItemStatus(item._id, s)}
          >
            {s}
          </DropdownItem>
        ))}
      </div>
    );
  };

  const renderItemsAction = (item) => {
    const isAdmin = user.role === ROLE_ADMIN;

    if (item.status === "Delivered") {
      return (
        <Link
          to={`/product/${item.product.slug}`}
          className="btn-link text-center py-2 fs-12"
          style={{ minWidth: 120 }}
        >
          Reivew Product
        </Link>
      );
    } else if (item.status !== "Cancelled") {
      if (!isAdmin) {
        return (
          <DropdownConfirm label="Cancel">
            <div className="d-flex flex-column align-items-center justify-content-center p-2">
              <p className="text-center mb-2">{`Are you sure you want to cancel ${item.product?.name}.`}</p>
              <Button
                variant="danger"
                id="CancelOrderItemPopover"
                size="sm"
                text="Confirm Cancel"
                role="menuitem"
                className="cancel-order-btn"
                onClick={() => updateOrderItemStatus(item._id, "Cancelled")}
              />
            </div>
          </DropdownConfirm>
        );
      } else {
        return (
          <DropdownConfirm
            label={item.product && item.status}
            className={isAdmin ? "admin" : ""}
          >
            {renderPopoverContent(item)}
          </DropdownConfirm>
        );
      }
    }
  };

  return (
    <div className="order-items pt-3">
      <h2>Order Items</h2>

      <Row>
        <Col xs="12">
          <div className="d-flex justify-content-between bg-dark text-light rounded mb-2">
            <div className="order_item_detail_header">Image</div>
            <div className="order_item_detail_header">Name</div>
            <div className="order_item_detail_header">Price</div>
            <div className="order_item_detail_header">status</div>
            <div className="order_item_detail_header">Quantity</div>
            <div className="order_item_detail_header">Brand</div>
            <div className="order_item_detail_header">Total Price</div>
            <div className="order_item_detail_header">Change Status</div>
          </div>
        </Col>
        {order.products.map((item, index) => (
          <Col xs="12" key={index} className="item">
            <div className="d-flex justify-content-between">
              <div className="order_item_detail_body">
                <img
                  className="item-image"
                  src={`http://localhost:8080/${
                    item.product && item.product.imageUrl
                      ? item.product.imageUrl
                      : "/images/placeholder-image.png"
                  }`}
                />
              </div>
              <div className="order_item_detail_body">
                {item.product ? (
                  <>
                    <Link to={`/product/${item.product?.slug}`}>
                      {item.product?.name}
                    </Link>
                  </>
                ) : (
                  <h4>Not Available</h4>
                )}
              </div>
              <div className="order_item_detail_body">
                {item.product ? (
                  <>${item.purchasePrice || item.product.price}</>
                ) : (
                  <h4>Not Available</h4>
                )}
              </div>
              <div className="order_item_detail_body">{item.status}</div>
              <div className="order_item_detail_body">{item.quantity}</div>
              <div className="order_item_detail_body">Brand</div>
              <div className="order_item_detail_body">{item.totalPrice}</div>
              <div className="order_item_detail_body">
                {item.product && (
                  <div className="text-right mt-2 mt-md-0">
                    {renderItemsAction(item)}
                  </div>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OrderItems;
