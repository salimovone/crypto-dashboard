import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'A',
    uv: 50,
    pv: 25,
  },
  {
    name: 'B',
    uv: 20,
    pv: 18,
  },
  {
    name: 'C',
    uv: 22,
    pv: 42,
  },
  {
    name: 'D',
    uv: 18,
    pv: 22,
  },
  {
    name: 'E',
    uv: 10,
    pv: 19,
  },
  {
    name: 'F',
    uv: 12,
    pv: 13,
  },
  {
    name: 'G',
    uv: 25,
    pv: 28,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%" className={"mt-5"}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#664DC9" />
          <Bar dataKey="uv" fill="#44C4FA" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
