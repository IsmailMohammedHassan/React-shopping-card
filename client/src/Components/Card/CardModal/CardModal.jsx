import React from "react";
import Zoom from "react-reveal/Zoom";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
export default function CardModal({ order, cartItems, closeModal }) {
  return (
    <>
      {order && (
        <Modal show={order} size="lg" onHide={closeModal}>
          <Modal.Body className="bg-dark">
            <div key={order._id}>
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{order.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{order.email}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>
                      {cartItems.reduce((a, p) => {
                        return a + p.price;
                      }, 0)}
                    </td>
                  </tr>

                  <tr>
                    <td>Selected Products</td>
                    <td>
                      {cartItems.map((p) => (
                        <div>
                          <p>
                            Product name is:{" "}
                            <span className="text-primary fw-bolder">
                              {p.title}
                            </span>
                          </p>
                          <p>
                            Quantity of this product is:{" "}
                            <span className="text-primary fw-bolder">
                              {p.qty}
                            </span>
                          </p>
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Zoom left>
                <div className="text-center mx-auto">
                  <p className="badge bg-success fs-5">
                    Order done success{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </p>
                </div>
              </Zoom>

              <button className="btn btn-dark border" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
