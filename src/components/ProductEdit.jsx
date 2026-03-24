import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ProductEdit.css";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated product:", form);

    axios.put(`https://fakestoreapi.com/products/${id}`, form)
      .then(() => {
        alert("Updated successfully!");
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="edit-container">
      <div className="edit-card">
        <button  className="edit-close-btn" onClick={() => navigate("/products")}> X </button>
        <h2> Edit Product </h2>

        <form className="edit-form" onSubmit={handleSubmit}>
          <input name="title" value={form.title} onChange={handleChange} />
          <input name="price" value={form.price} onChange={handleChange} />
          <input name="category" value={form.category} onChange={handleChange} />
          <textarea name="description" value={form.description} onChange={handleChange} />
          <button type="submit"> Save </button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;