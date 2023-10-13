import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="list" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </symbol>
        <symbol id="search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </symbol>
      </svg>

      <header
        className="navbar sticky-top flex-md-nowrap p-0 m-0 shadow "
        data-bs-theme="dark"
        style={{
          backgroundColor: "#1e1190",
          justifyContent: "flex-end",
          width:"100%"
        }}
      >
        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button
              className="nav-link px-3 text-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg className="bi" style={{width:"2rem",height:"2rem"}}>
                <use href="#list" />
              </svg>
            </button>
          </li>
        </ul>

        <div id="navbarSearch" className="navbar-search w-100 collapse">
          <input
            className="form-control w-100 rounded-0 border-0"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </header>

      <div className="container-fluid">
        <div className="row ">
          <div
            className="sidebar col-md-3 col-lg-2 p-0  "
            style={{ backgroundColor: "#1e1190" }}
          >
            <div
              className="offcanvas-md offcanvas-end "
              tabindex="-1"
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
              style={{
                backgroundColor: "#1e1190",
                width: "20rem",
                border: "0",
              }}
            >
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-4 overflow-y-auto ">
                <Link
                  to="/"
                  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                  style={{ marginLeft: "1rem" }}
                >
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/3d-fluency/94/user-male-circle.png"
                    alt="user-male-circle"
                  />
                  <span className="fs-4">Dashboard</span>
                </Link>

                <ul className="nav flex-column mb-auto mt-4  mx-2">
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-2 active text-white"
                      aria-current="page"
                      to="/"
                    >
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/3d-fluency/94/control-panel.png"
                        alt="control-panel"
                      />
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-2 text-white"
                      to="/products"
                    >
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/3d-fluency/94/open-box.png"
                        alt="control-panel"
                      />
                      Products
                    </Link>
                  </li>

                  <li className="nav-item" style={{ marginLeft: ".2rem" }}>
                    <button
                      className="btn btn-toggle gap-2 text-white d-inline-flex align-items-center rounded border-0 collapsed dropdown-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target="#dashboard-collapse"
                      aria-expanded="false"
                    >
                      {" "}
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/3d-fluency/94/card-wallet.png"
                        alt="card-wallet"
                      />{" "}
                      Income
                    </button>
                    <div className="collapse  " id="dashboard-collapse">
                      <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small nav-link align-items-center gap-2 text-white">
                        <li>
                          <Link
                            to="/income/overview"
                            className="link-body-emphasis gap-2 d-inline-flex text-decoration-none rounded text-white"
                          >
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/3d-fluency/94/date-from.png"
                              alt="date-from"
                            />
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/income/weekly"
                            className="link-body-emphasis gap-2 d-inline-flex text-decoration-none rounded text-white"
                          >
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/3d-fluency/94/date-from.png"
                              alt="date-from"
                            />
                            Weekly
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/income/monthly"
                            className="link-body-emphasis gap-2 d-inline-flex text-decoration-none rounded text-white"
                          >
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/3d-fluency/94/date-from.png"
                              alt="date-from"
                            />
                            Monthly
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/income/annually"
                            className="link-body-emphasis gap-2 d-inline-flex text-decoration-none rounded text-white"
                          >
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/3d-fluency/94/date-from.png"
                              alt="date-from"
                            />
                            Annually
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-2 text-white"
                      to="/customers"
                    >
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/3d-fluency/94/group--v1.png"
                        alt="group--v1"
                      />
                      Customers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-2 text-white"
                      to="/promote"
                    >
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/3d-fluency/94/discount.png"
                        alt="discount"
                      />
                      Promote
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-2 text-white"
                      to="/help"
                    >
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/3d-fluency/94/online-support--v1.png"
                        alt="online-support--v1"
                      />
                      Help
                    </Link>
                  </li>
                </ul>

                <hr />

                <div
                  className="d-flex "
                  style={{
                    paddingLeft: "1rem",

                    marginTop: "25rem",
                  }}
                >
                  <div className="dropdown ">
                    <Link
                      to="/"
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="40"
                        height="40"
                        className="rounded-circle me-2"
                      />
                      <strong className="pt-3">
                        Yatin
                        <p
                          className=""
                          style={{ fontSize: "small", color: "light" }}
                        >
                          Product Manager
                        </p>
                      </strong>
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-menu-dark text-small shadow"
                      style={{ backgroundColor: "#1e1190" }}
                    >
                      <li>
                        <Link className="dropdown-item" to="/">
                          New project...
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
