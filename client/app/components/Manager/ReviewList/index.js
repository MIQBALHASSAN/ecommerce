/**
 *
 * ReviewList
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import { formatDate } from "../../../utils/date";
import { getRandomColors } from "../../../utils";
import Button from "../../Common/Button";
import { CheckIcon, RefreshIcon, TrashIcon } from "../../Common/Icon";
import { Badge, Table } from "reactstrap";

const ReviewList = (props) => {
  const { reviews, approveReview, rejectReview, deleteReview } = props;

  const getAvatar = (review) => {
    // const color = getRandomColors();
    if (review.user.firstName) {
      return <div className="">{review.user.firstName}</div>;
    }
  };

  const getProduct = (review) => {
    if (review.product) {
      const product = review.product;
      return (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            className="item-image"
            src={`http://localhost:8080/${
              product.imageUrl
                ? product.imageUrl
                : "/images/placeholder-image.png"
            }`}
          />
        </div>
      );
    }
  };

  return (
    <div className="r-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="table_head_bg text-light text-center">
          <tr className="text-left">
            <th>Product Image</th>
            <th>Product Title</th>
            <th>Review</th>
            <th>User Name</th>
            <th>Review Title</th>
            <th>Review Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr className="text-left" key={index}>
              <td className="align-middle">{getProduct(review)}</td>
              <td className="align-middle">
                {review.product ? (
                  <Link
                    to={`/product/${review.product.slug}`}
                    className="default-link shop-read-more"
                  >
                    {review?.product.name}
                  </Link>
                ) : (
                  <p>Product is not available.</p>
                )}
              </td>
              <td className="align-middle">
                <ReactStars
                  classNames="mt-1 mt-lg-2"
                  size={16}
                  edit={false}
                  color={"#adb5bd"}
                  activeColor={"#ffb302"}
                  a11y={true}
                  isHalf={true}
                  emptyIcon={<i className="fa fa-star" />}
                  halfIcon={<i className="fa fa-star-half-alt" />}
                  filledIcon={<i className="fa fa-star" />}
                  value={review.rating}
                />
              </td>
              <td className="align-middle">{getAvatar(review)}</td>
              <td className="align-middle">{review.title}</td>
              <td className="align-middle">{review.review}</td>
              <td className="align-middle">{`Review Added on ${formatDate(
                review.created
              )}`}</td>
              <td className="align-middle">
                {review.status === "Approved" ? (
                  <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mx-0">
                    <div className="d-flex flex-row mx-0">
                      <CheckIcon className="text-green" />
                      <p className="ml-2 mb-0">Approved</p>
                    </div>
                    <Button
                      className="mt-3 mt-lg-0"
                      text="Delete"
                      icon={<TrashIcon width={15} />}
                      onClick={() => deleteReview(review._id)}
                    />
                  </div>
                ) : review.status === "Rejected" ? (
                  <>
                    <div className="d-flex align-items-center mb-3">
                      <RefreshIcon className="text-primary" />
                      <p className="fw-medium ml-3 mb-0">Re Approve Review</p>
                    </div>
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mx-0">
                      <Button
                        className="text-uppercase"
                        variant="primary"
                        size="md"
                        text="Approve"
                        onClick={() => approveReview(review)}
                      />
                      <Button
                        className="mt-3 mt-lg-0"
                        text="Delete"
                        icon={<TrashIcon width={15} />}
                        onClick={() => deleteReview(review._id)}
                      />
                    </div>
                  </>
                ) : (
                  <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mx-0">
                    <div className="d-flex flex-column flex-lg-row mx-0">
                      <Button
                        variant="dark"
                        className="text-uppercase"
                        size="md"
                        text="Approve"
                        onClick={() => approveReview(review)}
                      />
                      <Button
                        variant="danger"
                        className="mt-3 mt-lg-0 ml-lg-2 text-uppercase"
                        size="md"
                        text="Reject"
                        onClick={() => rejectReview(review)}
                      />
                    </div>
                    <Button
                      className="mt-3 mt-lg-0"
                      text="Delete"
                      icon={<TrashIcon width={15} />}
                      onClick={() => deleteReview(review._id)}
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {reviews.map((review, index) => (
        <div key={index} className="review-box">
          <div className="mb-3 p-4">
            <div className="d-flex flex-row mx-0 mb-2 mb-lg-3 align-items-center justify-content-between">
              <div className="review-content">
                <div className="d-flex flex-row mx-0 mb-2 align-items-center justify-content-between">
                  <p className="mb-0 fw-medium fs-16 text-truncate">
                    {review.title}
                  </p>
                  <div className="d-block d-lg-none">{getAvatar(review)}</div>
                </div>
                <p className="mb-0 fw-normal fs-14 word-break-all">
                  {review.review}
                </p>
              </div>
              <div className="d-none d-lg-block">{getAvatar(review)}</div>
            </div>
            <div className="d-flex flex-column flex-lg-row mx-0 mb-3 align-items-start justify-content-between">
              <div className="w-100 mb-3 mb-lg-0 review-product-box">
                {review.product ? (
                  <Link
                    to={`/product/${review.product.slug}`}
                    className="default-link"
                  >
                    {review?.product.name}
                  </Link>
                ) : (
                  <p>Product is not available.</p>
                )}

                <ReactStars
                  classNames="mt-1 mt-lg-2"
                  size={16}
                  edit={false}
                  color={"#adb5bd"}
                  activeColor={"#ffb302"}
                  a11y={true}
                  isHalf={true}
                  emptyIcon={<i className="fa fa-star" />}
                  halfIcon={<i className="fa fa-star-half-alt" />}
                  filledIcon={<i className="fa fa-star" />}
                  value={review.rating}
                />
              </div>
              {getProduct(review)}
            </div>
            <label className="text-black">{`Review Added on ${formatDate(
              review.created
            )}`}</label>
            <hr />
            {review.status === "Approved" ? (
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mx-0">
                <div className="d-flex flex-row mx-0">
                  <CheckIcon className="text-green" />
                  <p className="ml-2 mb-0">Approved</p>
                </div>
                <Button
                  className="mt-3 mt-lg-0"
                  text="Delete"
                  icon={<TrashIcon width={15} />}
                  onClick={() => deleteReview(review._id)}
                />
              </div>
            ) : review.status === "Rejected" ? (
              <>
                <div className="d-flex align-items-center mb-3">
                  <RefreshIcon className="text-primary" />
                  <p className="fw-medium ml-3 mb-0">Re Approve Review</p>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mx-0">
                  <Button
                    className="text-uppercase"
                    variant="primary"
                    size="md"
                    text="Approve"
                    onClick={() => approveReview(review)}
                  />
                  <Button
                    className="mt-3 mt-lg-0"
                    text="Delete"
                    icon={<TrashIcon width={15} />}
                    onClick={() => deleteReview(review._id)}
                  />
                </div>
              </>
            ) : (
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mx-0">
                <div className="d-flex flex-column flex-lg-row mx-0">
                  <Button
                    variant="dark"
                    className="text-uppercase"
                    size="md"
                    text="Approve"
                    onClick={() => approveReview(review)}
                  />
                  <Button
                    variant="danger"
                    className="mt-3 mt-lg-0 ml-lg-2 text-uppercase"
                    size="md"
                    text="Reject"
                    onClick={() => rejectReview(review)}
                  />
                </div>
                <Button
                  className="mt-3 mt-lg-0"
                  text="Delete"
                  icon={<TrashIcon width={15} />}
                  onClick={() => deleteReview(review._id)}
                />
              </div>
            )}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ReviewList;
