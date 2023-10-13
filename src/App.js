import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./components/dashboard";

import Promote from "./components/promote";
import Help from "./components/help";
import Overview from "./components/Income/overview";
import Annually from "./components/Income/annually";
import Monthly from "./components/Income/monthly";
import Weekly from "./components/Income/weekly";
import Customers from "./components/Customers";
import Products from "./components/products";


function App() {
  return (
    <>
      <Router>
        <div className="container-fluid m-0" style={{overflowX:"hidden"}}>
          <div className="row">
            <div
              className="sidebar border-right col-md-3 col-lg-2 p-0 m-0  "
              style={{ backgroundColor: "#1e1190" }}
            >
              <Home />
            </div>
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-body-secondary">
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/customers" element={<Customers />} />
                <Route exact path="/income/overview" element={<Overview />} />
                <Route exact path="/income/weekly" element={<Weekly />} />
                <Route exact path="/income/monthly" element={<Monthly />} />
                <Route exact path="/income/annually" element={<Annually />} />
                <Route exact path="/promote" element={<Promote />} />
                <Route exact path="/help" element={<Help />} />
                <Route exact path="/products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
