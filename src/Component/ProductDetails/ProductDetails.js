import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ProductDetails.css";
import icon from "../../photos/x-mark.png";

const ProductDetails = (product) => {
  console.log(product);
  const {
    modelName,
    description,
    material,
    type,
    weight,
    size,
    color,
    img,
    composition,
    additionalInformation,
  } = product.product;
  console.log(description);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [on, setOn] = useState(false);

  const [upload, setUpload] = useState(false);

  let imgFile;
  const handleFile = (event) => {
    setUpload(true);
    imgFile = event.target.files[0];
    handleFileValidationAndUploading();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setOn(true);
  };
  const handleDragLeave = (e) => {
    setOn(false);
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();

    imgFile = e.dataTransfer.files[0];
    handleFileValidationAndUploading();
  };
  const handleFileValidationAndUploading = () => {
    setUpload(true);
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#E7E6E7" }}
        className="d-flex align-items-center p-2 justify-content-between"
      >
        <h4>{modelName}</h4>
        <img
          style={{ height: "30px" }}
          src={icon}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="mx-2">
        <div
          style={{ backgroundColor: "#F9F8F9" }}
          className="row justify-content-center "
        >
          <div className="col-md-3 mt-5 text-center ">
            <img
              style={{ height: "300px" }}
              src={img}
              alt="productImg"
              className="img-fluid"
            />
            <div
              style={{ width: "85%" }}
              onDragOver={(e) => handleDragOver(e)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e)}
              className="dropBox mt-5 mb-5 m-auto text-center p-5 "
            >
              {!upload ? (
                <h1 className="Drop-content">
                  {on
                    ? "Release To Upload  File"
                    : "Drag & Drop To Upload File"}
                </h1>
              ) : (
                <h1 className="Drop-content text-success">File uploaded</h1>
              )}
              <label
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#E7E6E7",
                  color: "#6F6A69",
                  width: "80%",
                }}
                className="btn  browseFileBtn"
                htmlFor="ImgFile"
              >
                Browse
              </label>
              <input
                type="file"
                onChange={handleFile}
                name="file"
                id="ImgFile"
                hidden
              />
            </div>
          </div>
          <div className="col-md-8 mt-5 ">
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex mb-2 justify-content-between ">
                <label className="pe-1 " htmlFor="">
                  Name of metarial
                </label>
                <input
                  style={{ width: "70%" }}
                  className="form-control"
                  name="modelName"
                  defaultValue={modelName}
                  {...register("modelName")}
                />
              </div>
              <div className="d-flex mb-2 justify-content-between  ">
                <label className="pe-1" htmlFor="">
                  Description
                </label>
                <textarea
                  style={{ width: "70%" }}
                  className="form-control"
                  name="description"
                  rows="2"
                  placeholder={description}
                  {...register("description")}
                ></textarea>
              </div>
              <div className="d-flex mb-2 justify-content-between  ">
                <label className="pe-1" htmlFor="">
                  Material / Part Type
                </label>
                <div style={{ width: "70%" }} className="row m-0">
                  <div className="col-md-5 material me-2 p-0">
                    <select
                      className="form-control"
                      name="material"
                      {...register("material")}
                    >
                      <option>{material}</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="col-md-5 p-0">
                    <select
                      className="form-control"
                      name="type"
                      {...register("type")}
                    >
                      <option>{type}</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-2 justify-content-between ">
                <label className="pe-1" htmlFor="">
                  Weight
                </label>
                <input
                  style={{ width: "70%" }}
                  className="form-control"
                  name="weight"
                  defaultValue={weight}
                  {...register("weight")}
                />
              </div>
              <div className="d-flex mb-2 justify-content-between ">
                <label className="pe-1" htmlFor="">
                  Size
                </label>
                <input
                  style={{ width: "70%" }}
                  className="form-control"
                  name="size"
                  defaultValue={size}
                  {...register("size")}
                />
              </div>
              <div className="d-flex mb-2 justify-content-between ">
                <label className="pe-1" htmlFor="">
                  Composition
                </label>
                <input
                  style={{ width: "70%" }}
                  className="form-control"
                  name="composition"
                  defaultValue={composition}
                  {...register("composition")}
                />
              </div>
              <div className="d-flex mb-2 justify-content-between ">
                <label className="pe-1" htmlFor="">
                  Color
                </label>
                <input
                  style={{ width: "70%" }}
                  className="form-control"
                  name="color"
                  defaultValue={color}
                  {...register("color")}
                />
              </div>
              <div className="d-flex mb-2 radioButtons justify-content-between ">
                <label className="pe-1" htmlFor="">
                  Factory Source/Nominated/Provide By Me
                </label>
                <div style={{ width: "70%" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        className="me-1"
                        name="supplier"
                        id="supplier"
                      />
                      <small className="me-2" htmlFor="supplier">
                        Sourced By Supplier
                      </small>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        className="me-1"
                        name="nominated"
                        id="nominated"
                      />
                      <small className="me-2" htmlFor="nominated">
                        Nominated Supplier
                      </small>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="checkbox"
                        className="me-1"
                        name="us"
                        id="us"
                      />
                      <small className="me-2" htmlFor="us">
                        Provide by us
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-2 mt-5 pt-5 justify-content-between ">
                <label className="pe-1" htmlFor="">
                  Additional Information
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder={additionalInformation}
                ></textarea>
              </div>

              <input
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#E7E6E7",
                  color: "#6F6A69",
                }}
                className="btn d-flex mt-3 ms-auto"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
