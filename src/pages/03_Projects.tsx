// Projects.tsx

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DontMiss from "../components/contentBlocks/DontMiss";
import HeaderModed from "../components/contentBlocks/HeaderModed";
import { TProduct } from "../interfaces/TProducts";

interface Props {
  products: TProduct[];
}

const Projects: React.FC<Props> = ({ products }) => {
  return (
    <section>
      <HeaderModed />
      <div className="container">
        <div className="row gx-5">
          {products && products.length > 0 ? (
            products.map((item) => (
              <div
                key={item.id}
                className="col col-sm-12 col-md-6 col-lg-4 col-xl-3"
              >
                <div className="product-card">
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="product-image"
                    />
                  </Link>
                  <div className="product-content">
                    <Link to={`/shop/${item.id}`}>
                      <h2>{item.title}</h2>
                    </Link>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <br />
                    <button className="btn btn-primary">
                      Thêm vào Giỏ Hàng
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      <DontMiss />
      <Footer />
    </section>
  );
};

export default Projects; // Đảm bảo export Projects như một default export
