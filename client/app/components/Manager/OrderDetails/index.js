/**
 *
 * OrderDetails
 *
 */

import React from "react";

import { Row, Col } from "reactstrap";

import OrderMeta from "../OrderMeta";
import OrderItems from "../OrderItems";
import OrderSummary from "../OrderSummary";

const OrderDetails = (props) => {
  const { order, user, cancelOrder, updateOrderItemStatus, onBack } = props;
  return (
    <div className="order-details p-5">
      <Row className="m-0">
        <Col xs="12" md="12" className="p-0">
          <OrderMeta order={order} cancelOrder={cancelOrder} onBack={onBack} />
        </Col>
      </Row>
      <Row className="m-0">
        <Col xs="12" lg="8" className="p-0">
          <OrderItems
            order={order}
            user={user}
            updateOrderItemStatus={updateOrderItemStatus}
          />
        </Col>
        <Col xs="12" lg="4" className="mt-5 mt-lg-2">
          <OrderSummary order={order} />
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetails;
