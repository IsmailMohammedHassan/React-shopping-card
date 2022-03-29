import React from "react";
import "../../css/Checkout-Form/Checkout.css";
import Input from "../Input/Input";
import Flip from "react-reveal/Flip";
export default function Checkout({
  showForm,
  setShowForm,
  submitForm,
  handleChange,
}) {
  return (
    <>
      {showForm && (
        <Flip bottom>
          <div className="checkout-form">
            <svg
              onClick={() => setShowForm(false)}
              className="bi bi-x-lg x-close"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="green"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
            <form onSubmit={submitForm}>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                label="Name"
              />

              <Input
                type="email"
                name="email"
                onChange={handleChange}
                label="Email"
              />

              <div>
                <button type="submit" className="btn btn-success">
                  {" "}
                  CheckOut
                </button>
              </div>
            </form>
          </div>
        </Flip>
      )}
    </>
  );
}
