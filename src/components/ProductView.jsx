import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ProductView.css";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h2> Loading... </h2>;

  return (
    <div className="view-container">
      <div className="view-card">
        <button className="view-close-btn" onClick={() => navigate("/products")}> X </button>
        <img src={product.image} alt={product.title} />
        <h3> {product.title} </h3>
        <p> <b> Price: </b> {product.price} $ </p>
        <p> <b> Category: </b> {product.category} </p>
        <p> <b> Description: </b> {product.description} </p>
      </div>
    </div>
  );
};

export default ProductView;