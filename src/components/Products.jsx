import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { fetchProducts } from "../store/ProductSlice";
import {STATUES} from "../store/ProductSlice"

const Products = () => {
  const dispatch = useDispatch();
  const {data:products ,status} = useSelector((state)=>state.Product)
//   const [products, setProducts] = useState([]);

  //   const fetchProducts = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setProducts(data);
  //   };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

    if(status===STATUES.LOADING){
        return <h2>Loading.....</h2>
    }

    if(status===STATUES.ERROR){
        return <h2>Something went Wrong!</h2>
    }
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            const { title, image, id, price } = product;
            return (
              <>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12" >
                  <div className="card mt-4" key={id}>
                    <img
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      src={image}
                      className="card-img-top w-50 ms-5"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title.slice(0, 15)}</h5>
                      <p className="card-text">{price}</p>
                      <button
                        onClick={() => handleAdd(product)}
                        className="btn btn-primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
