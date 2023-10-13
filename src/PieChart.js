import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PieCharts = () => {
  const data = [
    { value: 10, label: "B" },
    { value: 15, label: "C" },
  ];

  const size = {
    width: 350,
    height: 400,
  };

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 15,

    textAlign: "justify",
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText
        sx={{ color: "error.main" }}
        y={left + width / 2.2}
        x={top + height / 2.5}
      >
        {children}
      </StyledText>
    );
  }
  function PieCenterLabel1({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText y={left + width / 1.8} x={top + height / 2.5}>
        {children}
      </StyledText>
    );
  }
  function PieCenterLabel2({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText y={left + width / 1.5} x={top + height / 2.5}>
        {children}
      </StyledText>
    );
  }
  return (
    <div
      className="rounded-5 mx-2"
      style={{ backgroundColor: "white", height: "24rem" }}
    >
      <h4 className="mx-3 pt-3">Customers</h4>
      <p className="fs-small mx-3" style={{ fontSize: "10px" }}>
        Customers that buy products
      </p>

      <PieChart
        series={[
          {
            data: data,
            innerRadius: 60,
            outerRadius: 120,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 140,
          },
        ]}
        {...size}
      >
        <PieCenterLabel>65% </PieCenterLabel>

        <PieCenterLabel1>Total New</PieCenterLabel1>
        <PieCenterLabel2>Customers</PieCenterLabel2>
      </PieChart>
    </div>
  );
};

export default PieCharts;
