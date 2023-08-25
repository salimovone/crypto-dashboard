import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '0.0',
    uv: 10,
    pv: 8,
  },
  {
    name: '1.0',
    uv: 15,
    pv: 18,
  },
  {
    name: '2.0',
    uv: 25,
    pv: 28,
  },
  {
    name: '3.0',
    uv: 22,
    pv: 20,
  },
  {
    name: '4.0',
    uv: 18,
    pv: 16,
  },
  {
    name: '5.0',
    uv: 28,
    pv: 24,
  },
  {
    name: '6.0',
    uv: 33,
    pv: 34,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%" className={"mt-5"}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="catagory" dataKey="pv" stroke="#44C4FA" />
          <Line type="catagory" dataKey="uv" stroke="#664DC9" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
