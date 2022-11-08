/**
 *
 * WishList
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Badge, Table } from "reactstrap";

import { formatDate } from "../../../utils/date";
import Button from "../../Common/Button";
import { XIcon } from "../../Common/Icon";

const WishList = (props) => {
  const { wishlist, updateWishlist } = props;

  const getProductImage = (item) => {
    if (item.product) {
      const product = item.product;
      return (
        <div className="wishlist-image d-flex flex-column justify-content-center align-items-center">
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
    <div className="w-list">
      <Table responsive bordered={true} className="text-center">
        <thead className="table_head_bg text-light text-center">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={index}>
              <td className="align-middle">{getProductImage(item)}</td>
              <td className="align-middle">{item.product.name}</td>
              <td className="align-middle">{item.product.price}</td>
              <td className="align-middle">{`Wishlist Added on ${formatDate(
                item.created
              )}`}</td>
              <td className="align-middle">
                <Link to={`/product/${item.product.slug}`} key={index}>
                  <Badge color="info" pill className="admin_edit_btn">
                    Edit
                  </Badge>
                </Link>
              </td>
              <td className="align-middle">
                <Button
                  variant="danger"
                  icon={<XIcon className="text-white" width={15} />}
                  round={20}
                  onClick={(e) => {
                    updateWishlist(!item.isLiked, item.product._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WishList;
