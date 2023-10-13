import React, { useState } from "react";
import { BarChart, Bar, Cell, XAxis ,ResponsiveContainer} from "recharts";

const Charts = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Sept",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Oct",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Nov",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Dec",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // const activeItem = data[activeIndex];

  const handleClick = (entry, index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="charts px-5 py-3 rounded-5" style={{ backgroundColor: "white" }}>
        <div className="d-flex" style={{backgroundColor: "white",justifyContent:"space-between"}}>
          <div>
            <h4 className="">Overview</h4>
            <p style={{ fontSize: "10px" }}>Monthly Earnings</p>
          </div>
          <div >
            <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quartly
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
        <ResponsiveContainer width="100%" height={280}>
        <BarChart width={50} height={20} data={data}>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />

          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? "#e988ff" : "e9e8ff"}
                key={`cell-${index}`}
                style={{ borderRadius: "10px" }}
              />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
        {/* <p className="content">{activeItem.name}</p> */}
      </div>
    </>
  );
};

export default Charts;
