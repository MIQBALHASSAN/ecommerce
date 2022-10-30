/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Row, Col, Button } from "reactstrap";

import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";
import BrandList from "../../components/Store/BrandList";
//
import ProductList from "../../components/Store/ProductList";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import NotFound from "../../components/Common/NotFound";

class Homepage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreBrands();
    const slug = this.props.match.params.slug;
    this.props.filterProducts("category", slug);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.filterProducts("category", slug);
    }
  }

  render() {
    // const { brands } = this.props;
    const { brands, products, isLoading, authenticated, updateWishlist } =
      this.props;

    return (
      <div className="homepage-container mt-5">
        <div className="homepage">
          <Row className="flex-row">
            <Col xs="12" lg="6" className="order-lg-2 mb-3 px-3 px-md-2">
              <div className="home-carousel">
                <CarouselSlider
                  swipeable={true}
                  showDots={true}
                  infinite={true}
                  autoPlay={false}
                  slides={banners}
                  responsive={responsiveOneItemCarousel}
                >
                  {banners.map((item, index) => (
                    <img key={index} src={item.imageUrl} />
                  ))}
                </CarouselSlider>
              </div>
            </Col>
            <Col xs="12" lg="3" className="order-lg-1 mb-3 px-3 px-md-2">
              <div className="d-flex flex-column h-100 justify-content-between">
                <img src="/images/banners/banner-2.jpg" className="mb-3" />
                <img src="/images/banners/banner-5.jpg" />
              </div>
            </Col>
            <Col xs="12" lg="3" className="order-lg-3 mb-3 px-3 px-md-2">
              <div className="d-flex flex-column h-100 justify-content-between">
                <img src="/images/banners/banner-2.jpg" className="mb-3" />
                <img src="/images/banners/banner-6.jpg" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <BrandList brands={brands} />
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col>
              <h3 className="text-uppercase">Shop By Products</h3>
              <hr />
              {isLoading && <LoadingIndicator />}
              {products && products.length > 0 && (
                <ProductList
                  products={products}
                  authenticated={authenticated}
                  updateWishlist={updateWishlist}
                />
              )}
              {!isLoading && products && products.length <= 0 && (
                <NotFound message="no products found." />
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brand.storeBrands,
    products: state.product.storeProducts,
    isLoading: state.product.isLoading,
    authenticated: state.authentication.authenticated,
  };
};

export default connect(mapStateToProps, actions)(Homepage);
