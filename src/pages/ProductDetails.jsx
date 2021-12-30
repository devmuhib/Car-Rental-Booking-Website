import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../config/config';
import useFetch from '../hooks/useFetch';
import '../styles/product-details.css';
import ProductCard from '../components/ProductCard';
import Helmet from '../components/Helmet';

import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const {
    data: product,
    isPending,
    error,
  } = useFetch(`${BASE_URL}/products/${id}`);
  const { title, price, imgUrl, description } = product;
  const { data: products } = useFetch(`${BASE_URL}/products`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products, product]);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        imgUrl,
      })
    );
  };

  return (
    <Helmet title="Product-Details">
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              {isPending && <p className="text-center">Loading......</p>}
              {error && <h6 className="text-center">{error}</h6>}
              <img src={imgUrl} alt="" className="w-100" />
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="product__details mt-5">
                <h4>{product.title}</h4>
                <p className="section__description">{description}</p>
                <h4 className="section__subtitle d-flex  gap-2">
                  <h6 className="fs-6">Price:</h6>${Number(`${price}`)}
                </h4>

                <button className="btn px-4 mt-5" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </Col>
            <Col lg="12" className="text-center related__products">
              <h2 className="section__title">Related Products</h2>
            </Col>
            {products.slice(0, 4).map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
