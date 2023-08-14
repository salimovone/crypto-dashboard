import React, { useState } from "react";
import { Left, Main, Right } from "./style";
import BuySell from "../BuySellTable";
import Button from "../Button";
import Chart from "react-apexcharts";

const HomeEarrings = () => {
  const chartData = {
          
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: '2011',
            y: 1292,
            goals: [
              {
                name: 'Expected',
                value: 1400,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '2012',
            y: 4432,
            goals: [
              {
                name: 'Expected',
                value: 5400,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '2013',
            y: 5423,
            goals: [
              {
                name: 'Expected',
                value: 5200,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '2014',
            y: 6653,
            goals: [
              {
                name: 'Expected',
                value: 6500,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '2015',
            y: 8133,
            goals: [
              {
                name: 'Expected',
                value: 6600,
                strokeHeight: 13,
                strokeWidth: 0,
                strokeLineCap: 'round',
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '2016',
            y: 7132,
            goals: [
              {
                name: 'Expected',
                value: 7500,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '2017',
            y: 7332,
            goals: [
              {
                name: 'Expected',
                value: 8700,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '2018',
            y: 6553,
            goals: [
              {
                name: 'Expected',
                value: 7300,
                strokeHeight: 2,
                strokeDashArray: 2,
                strokeColor: '#775DD0'
              }
            ]
          }
        ]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      colors: ['#00E396'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0']
        }
      }
    },}

  return (
    <Main className="w-full">
      <Left className="w-600px overflow-x-scroll">
        <BuySell />
      </Left>
      <Right className="w-full">
        <div className="balance">
          <div>
            <p className="text-[14px] text-[#35446f]">BTC BALANCE</p>
            <h2 className="text-[24px] text-[#171717] font-bold">124.53 BTC</h2>
          </div>
          <div className="">
            <Button name="Send" />
            <Button name="Recive" bgcolor={"#fe3f51"} margin="10px 0 0 0 " />
          </div>
        </div>
        <div className="balance">
          <div>
            <p className="text-[14px] text-[#35446f]">BTC BALANCE</p>
            <h2 className="text-[24px] text-[#171717] font-bold">124.53 USD</h2>
          </div>
          <div className="">
            <Button name="Send" />
            <Button name="Recive" bgcolor={"#fe3f51"} margin="10px 0 0 0 " />
          </div>
        </div>

        <div className="balance">
          <div>
            <p className="text-[14px] text-[#35446f]">Users</p>
            <h2 className="text-[24px] text-[#171717] font-bold">2,843</h2>
            <p className="text-[14px] text-[#171717]">New Users</p>
          </div>

          <div>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={'250'}
            />
          </div>
        </div>
      </Right>
    </Main>
  );
};

export default HomeEarrings;
