import React from "react";
import Chart from "react-apexcharts";

const ColChart = () => {
  let chartData = {
    series: [
      {
        name: "Deposit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "WithDraw",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
        colors: ["rgb(13, 191, 10)", "rgb(254, 63, 81)"],
      },
      markers: {
        style: {
          colors: ["rgb(13, 191, 10)", "rgb(254, 63, 81)"],
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    />
  );
};

export default ColChart;
