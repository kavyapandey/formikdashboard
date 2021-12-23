import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

function ProductCreate() {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      productName:"",
      price:""
    },
    validate: (values) => {
      const errors = {};
      if(!values.productName){
        errors.productName = '*required';
      }
      if(!values.price){
        errors.price = '*required';
      }
      return errors
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post("https://60efffc0f587af00179d3c17.mockapi.io/products", {
          productName : values.productName,
          price : values.price
        });
        setLoading(false);
        history.push("/product");
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    }  

  });

  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h6 class="h3 mb-0 text-gray-800">Create Product</h6>
      </div>
     
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
          
            <div className="col-lg-6">
              <label htmlFor = "productName">Product Name</label>
              <input
                id = "productName"
                type="text"
                value={formik.values.productName}
                onChange={formik.handleChange}
                className="form-control"
              />
               {formik.errors.productName ? (
              <span className="text-danger">{formik.errors.productName}</span>
            ) : null}
            </div>
            <div className="col-lg-6">
              <label htmlFor = "price">Price</label>
              <input
                id = "price"
                type="text"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="form-control"
              />
               {formik.errors.price ? (
              <span className="text-danger">{formik.errors.price}</span>
            ) : null}
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Submit"
                disabled={isLoading}
                className="btn btn-primary mt-3"
              />

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductCreate;