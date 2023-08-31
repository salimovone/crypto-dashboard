import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 12,
    pv: 8,
  },
  {
    name: 'Feb',
    uv: 10,
    pv: 7,
  },
  {
    name: 'Mar',
    uv: 10,
    pv: 8,
  },
  {
    name: 'Apr',
    uv: 9,
    pv: 6,
  },
  {
    name: 'May',
    uv: 8,
    pv: 7,
  },
  {
    name: 'Jun',
    uv: 10,
    pv: 9,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-specified-domain-lm9p7';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" type={"monotone"} />
          <Line dataKey="uv" stroke="#82ca9d" type={"monotone"} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
