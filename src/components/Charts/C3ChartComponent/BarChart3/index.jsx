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
      Maxium: 11,
      Minium: 7,
    },
    {
      name: 'Feb',
      Maxium: 8,
      Minium: 7,
    },
    {
      name: 'Mar',
      Maxium: 18,
      Minium: 7,
    },
    {
      name: 'Apr',
      Maxium: 19,
      Minium: 9,
    },
    {   
      name: 'May',
      Maxium: 20,
      Minium: 4,
    },
    {
      name: 'Jun',
      Maxium: 25,
      Minium: 6,
    },
    {
      name: 'Jul',
      Maxium: 14,
      Minium: 2,
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
          <Bar dataKey="Maxium" barSize={15} fill="#44C3F9" />
          <Bar dataKey="Minium" barSize={15} fill="#664DC9" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
