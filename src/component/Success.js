import React from "react";
import "./success.css";
const Success = () => {
  return (
    <>
      <div className="top-portion">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div className="d-flex">
              <a class="navbar-brand" href="/">
                <img
                  src="logo2.png"
                  alt="Logo"
                  class="d-inline-block align-text-top logo"
                />
              </a>
              <p className="logo-text">
                <b>Alumni Association Platform</b>
              </p>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <a class="nav-link " aria-current="page" href="/">
                  <b>Home</b>
                </a>
                <a class="nav-link" href="/">
                  <b>News</b>
                </a>
                <a class="nav-link" href="/">
                  <b>Doubt forum</b>
                </a>
                <a class="nav-link " href="/">
                  <b>Job Portal</b>
                </a>
                <a class="nav-link " href="/">
                  <b>Collaborate</b>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container cardd" align="center">
          <h1>
            <b>Discover Alumni Success Stories and Plan your Own </b>
          </h1>
          <p>
            Search for alumni based on various criteria, including name,
            company,<br></br> interests, career path, industry, department,
            university, and year of pass-out
          </p>
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by  name, interests and more..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </div>
        </div>
      </div>
      <div class="container mt-2 d-flex justify-content-center">
        <div class="dropdown">
          <button
            class="btn btn-Light dropdown-toggle qbtn"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Branch
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="/">
                Computer Science
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Information Technology
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Mechanical Engineering
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-Light dropdown-toggle qbtn"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Course
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="/">
                Computer Science
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Information Technology
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Mechanical Engineering
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-Light dropdown-toggle qbtn"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Passout Year
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="/">
                Computer Science
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Information Technology
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Mechanical Engineering
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-Light dropdown-toggle qbtn"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Company
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="/">
                Computer Science
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Information Technology
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Mechanical Engineering
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-Light dropdown-toggle qbtn"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Clubs
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="/">
                Computer Science
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Information Technology
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Mechanical Engineering
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="card_photo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Students's Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Computer Engineering
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="card_photo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Students's Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Computer Engineering
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="card_photo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Students's Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Computer Engineering
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="card_photo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Students's Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Computer Engineering
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="card_photo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Students's Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Computer Engineering
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="card_photo.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Students's Name</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Computer Engineering
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
