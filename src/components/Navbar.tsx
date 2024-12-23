import { Link } from "react-router-dom";
import Login from "./Login";
import { ModalWrapper } from "./ModalWrapper";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="d-flex align-items-center text-light">
        <img src="https://img.freepik.com/free-vector/cute-puppy-kitten-paw-footprint-background-design_1017-54335.jpg" height="30" alt="" />
        <h5 className="m-0 ms-3">Pet.Care</h5>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <div className="navbar-nav me-auto align-items-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Products</a>
          <a href="#">Trainers</a>
        </div>
        <div className='d-flex align-items-center gap-2'>
          <button type="button" className="btn btn-outline-light rounded" data-bs-toggle="modal" data-bs-target="#addPetModal">Add Pet</button>
          <Login />
        </div>
      </div >
    </nav>
  )
}