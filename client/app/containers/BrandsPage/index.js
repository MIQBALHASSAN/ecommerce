/**
 *
 * BrandsPage
 *
 */

import React from "react";

import { connect } from "react-redux";

import actions from "../../actions";

import BrandList from "../../components/Store/BrandList";

class BrandsPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreBrands();
  }

  render() {
    const { brands } = this.props;

    return (
      <div className="brand-page-container mt-5 mb-5">
        <div className="brands-page">
          <BrandList brands={brands} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brand.storeBrands,
  };
};

export default connect(mapStateToProps, actions)(BrandsPage);
