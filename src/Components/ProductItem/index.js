import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from '../ProductModal';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductItem = (props) => {
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  const viewProductDetails = (id) => {
    setIsOpenProductModal(true);
  };

  const closeProductModal = () => {
    setIsOpenProductModal(false);
  };

  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
            alt="All Natural Italian-Style Chicken Meatballs"
            className="w-100"
          />
          <span className="badge badge-primary">28%</span>
          <div className="action">
            <Button onClick={() => viewProductDetails(1)}><TfiFullscreen /></Button>
            <Button><IoIosHeartEmpty /></Button>
          </div>
        </div>
        <div className="info">
          <h4>All Natural Italian-Style Chicken Meatballs</h4>
          <span className="text-success d-block">IN STOCK</span>
          <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>

      {isOpenProductModal && <ProductModal closeProductModal={closeProductModal} />}
    </>
  );
};

ProductItem.propTypes = {
  itemView: PropTypes.string,
};

ProductItem.defaultProps = {
  itemView: '',
};

export default ProductItem;
