import React from "react";
import Charts from "../charts";

import PieCharts from "../PieChart";
import  aboutPic from '../assets/about.png'

const Dashboard = () => {
  return (
    <div className="">
      <div className="d-flex mt-3" style={{ justifyContent: "space-between" }}>
        <div>
          <h5>
            {" "}
            Hello Yatin{" "}
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/emoji/48/waving-hand-emoji.png"
              alt="waving-hand-emoji"
            />{" "}
            ,
          </h5>
        </div>
        <div className="">
          <div
            class="input-group mb-1"
            style={{
              width: "11rem",
              height: "2rem",
              marginRight: "-2.5rem",
            }}
          >
            <input
              type="text"
              className="form-control rounded"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <img
              width="50"
              height="30"
              src="https://img.icons8.com/3d-fluency/94/search.png"
              alt="search"
              style={{ position: "relative", left: "-3rem" }}
              className="mt-1 btn "
            />
          </div>
        </div>
      </div>
      <div className="d-flex  text-center flex-wrap  gap-2">
        <div className="col mx-3 py-3">
          <div className=" d-flex py-1 px-3 rounded-lg bg-white rounded-3">
            <img
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/sales-performance.png"
              alt="sales-performance"
            />
            <div className="mx-1 ">
              <p className="m-0" style={{ fontSize: "12px" }}>
                Earnings
              </p>
              <h2 className="p-0">$198K</h2>

              <p style={{ fontSize: "10px" }}>
                <strong className="text-success">↑37.8%</strong> this Month
              </p>
            </div>
          </div>
        </div>
        <div className="col mx-3 py-3">
          <div className=" d-flex py-1 px-3 rounded-lg bg-white rounded-3">
            <img
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/bill.png"
              alt="bill"
            />
            <div>
              <p className="m-0">Orders</p>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                $2.4K
              </h2>
              <p style={{ fontSize: "10px" }}>
                <strong className="text-success">↓2%</strong> this Month
              </p>
            </div>
          </div>
        </div>
        <div className="col mx-3 py-3">
          <div className=" d-flex py-1 px-3 rounded-lg bg-white rounded-3">
            <img
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/cash-in-hand.png"
              alt="cash-in-hand"
            />
            <div>
              <p className="m-0">Balance</p>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                $2.7K
              </h2>
              <p style={{ fontSize: "10px" }}>
                <strong className="text-success">↓2%</strong> this Month
              </p>
            </div>
          </div>
        </div>
        <div className="col mx-3 py-3">
          <div className=" d-flex py-1 px-3 rounded-lg bg-white rounded-3">
            <img
              width="94"
              height="94"
              src="https://img.icons8.com/fluency/48/total-sales-1.png"
              alt="total-sales-1"
            />
            <div>
              <p className="m-0">Total sales</p>
              <h2 className="title-font font-medium text-2xl">$89K</h2>
              <p style={{ fontSize: "10px" }}>
                <strong className="text-success">↑11%</strong> this Month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex card border-0">
        <div className="row ">
          <div className="col-md-8  bg-body-secondary" >
            <Charts />
          </div>
          <divc className="col-md-4 bg-body-secondary" >
            <PieCharts />
          </divc>
        </div>
      </div>
      <div
        className="px-4 py-2 rounded-4 mt-3"
        style={{ backgroundColor: "white" }}
      >
        <div
          className="d-flex col-lg-10 my-1"
          style={{
            height: "3rem",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <h5>Product Sell</h5>
          <div className="d-flex">
            <div
              class="input-group mb-1"
              style={{
                width: "11rem",
                height: "2.5rem",
                marginRight: "-2.5rem",
              }}
            >
              <input
                type="text"
                className="form-control rounded"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <img
                width="50"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/search.png"
                alt="search"
                style={{ position: "relative", left: "-3rem" }}
                className="mt-1 btn "
              />
            </div>
            <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Last 30 days
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <div className="table-responsive  d-flex col-lg-12">
            <table className="table  ">
              <thead
                style={{ fontSize: "10px", borderBottom: "1px solid black" }}
              >
                <tr>
                  <th className="col-6">Product Name</th>
                  <th className="col-2">Stock</th>
                  <th className="col-2">Price</th>
                  <th className="col-1">Total Sales</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className=""><div className="d-flex"><img src={aboutPic} alt="" height={50} width={70} /><div><h5 className="">Yatin</h5><p className="m-0" style={{fontSize:"12px"}}>Stocks are a type of security that gives stockholders a share of ownership.</p></div></div></td>
                  <td className="" >32 in stocks</td>
                  <td className="fw-bold">$45.99</td>
                  <td className="">20</td>
                </tr>
                <tr>
                <td className=""><div className="d-flex"><img src={aboutPic} alt="" height={50} width={70} /><div><h5 className="">Yatin</h5><p className="m-0" style={{fontSize:"12px"}}>Stocks are a type of security that gives stockholders a share of ownership.
                </p></div></div></td>
                  <td className="">32 in stocks</td>
                  <td className="fw-bold">$45.99</td>
                  <td className="">20</td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
