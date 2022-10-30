/**
 *
 * OrderMeta
 *
 */

import React from "react";

import { Row, Col } from "reactstrap";

import { formatDate } from "../../../utils/date";
import Button from "../../Common/Button";
import { ArrowBackIcon } from "../../Common/Icon";

const OrderMeta = (props) => {
  const { order, cancelOrder, onBack } = props;

  const renderMetaAction = () => {
    const isNotDelivered =
      order.products.filter((i) => i.status === "Delivered").length < 1;

    if (isNotDelivered) {
      return <Button size="sm" text="Cancel Order" onClick={cancelOrder} />;
    }
  };

  return (
    <div className="order-meta border-dark border-bottom">
      <div className="d-flex align-items-center justify-content-between border-bottom border-dark pb-1">
        <h2 className="mb-0">Order Details</h2>
        <Button
          variant="link"
          icon={<ArrowBackIcon />}
          className="order_detail_back_btn"
          text="Back to orders"
          onClick={onBack}
        ></Button>
      </div>

      <Row className="align-items-center py-2 m-0">
        <Col xs="12" md="8" className="p-0">
          <Row className="">
            <Col xs="4">
              <p className="one-line-ellipsis">Order ID</p>
            </Col>
            <Col xs="8">
              <span className="order-label one-line-ellipsis">{` ${order._id}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <p className="one-line-ellipsis">Order Date</p>
            </Col>
            <Col xs="8">
              <span className="order-label one-line-ellipsis">{` ${formatDate(
                order.created
              )}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="4" className="text-left text-md-right">
          {renderMetaAction()}
        </Col>
      </Row>
    </div>
  );
};

export default OrderMeta;
