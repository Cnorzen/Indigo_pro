
import HeaderModed from "../contentBlocks/HeaderModed";
import DontMiss from "../contentBlocks/DontMiss";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { TProduct } from "../../interfaces/TProducts";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product";

export const Projects = () => {
  // page 3

  const [product, setProduct] = useState<TProduct | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(+id);
        setProduct(data);
      } catch (error) {
        console.error("lỗi không kết nối sản phẩm:", error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <section>
      <HeaderModed />
      <div className="container" style={{ maxWidth: "1620px" }}>
        <div className="row">
          <div className="col-xxl-3 col-md-12">
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="container">
        {product ? (
          <>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </>
        ) : (
          <div>Sản phẩm không tồn tại!</div>
        )}
      </div>

      <DontMiss />
      <Footer />
    </section>
  );
};
