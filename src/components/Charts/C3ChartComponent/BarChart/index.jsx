import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  {
    name: 'Aug',
    Maxium: 17,
    Minium: 12,
  },
  {
    name: 'Sep',
    Maxium: 32,
    Minium: 2,
  },
  {
    name: 'Nov',
    Maxium: 20,
    Minium: 8,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/mixed-bar-chart-q4hgc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Minium" stackId="a" barSize={20} fill="#664DC9" />
          <Bar dataKey="Maxium" stackId="a" barSize={20} fill="#44C3F9" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
