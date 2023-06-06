import React, { useState } from "react";
import "./product.css";
import SampleImage from "../../assets/glass1.png";
import { Link } from "react-router-dom";

const Product = () => {
  const [prdtQty, setPrdtQty] = useState(1);
  return (
    <section id="product">
      <div className="product-ctn">
        <div className="product-img">
          <img src={SampleImage} alt="" />
          <div className="mini-samples">
            <img src={SampleImage} alt="" />
            <img src={SampleImage} alt="" />
            <img src={SampleImage} alt="" />
            <img src={SampleImage} alt="" />
          </div>
        </div>

        <div className="product-details">
          <h3>Unisex glasses for everyone Lorem ipsum dolor sit amet.</h3>
          <div className="stars">
            <span className="star"></span>
          </div>
          <p className="price">#1,500</p>
          <div className="quantity">
            <button
              onClick={() => setPrdtQty(prdtQty - 1)} disabled={prdtQty<2}>-</button>
            <input type="text" placeholder={prdtQty} />
            <button onClick={() => setPrdtQty(prdtQty + 1)}>+</button>
          </div>
          <div className="cart-btn">
            <span>
              <button className="add2cart">Add to cart</button>
            </span>
            <span>
              <button className="add2cart">Buy Now</button>
            </span>
          </div>
          <br />
          <br />
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita, quisquam.
          </p>
        </div>
      </div>
<br />
      <div className="similar-prdt">
        <h2>Similar products</h2>
        <div className="similar">
          <img src={SampleImage} alt="" />
          <img src={SampleImage} alt="" />
          <img src={SampleImage} alt="" />
          <img src={SampleImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Product;
