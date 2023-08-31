import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 14,
    fill: "#664DC9"
  },
  {
    name: 'Feb',
    pv: 12,
    fill: "#44C4FA"
  },
  {
    name: 'Mar',
    pv: 34,
    fill: "#38CB89"
  },
  {
    name: 'Apr',
    pv: 24,
    fill: "#3E80EB"
  },
  {
    name: 'May',
    pv: 24,
    fill: "#FFAB00"
  },
  {
    name: 'Jun',
    pv: 20,
    fill: "#EF4B4B"
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" barSize={10} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
