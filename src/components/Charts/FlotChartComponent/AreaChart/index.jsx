import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 0.0,
    pv: 10,
    amt: 8,
  },
  {
    name: 0.1,
    pv: 15,
    amt: 18,
  },
  {
    name: 0.2,
    pv: 25,
    amt: 28,
  },
  {
    name: 0.3,
    pv: 22,
    amt: 20,
  },
  {
    name: 0.4,
    pv: 28,
    amt: 16,
  },
  {
    name: 0.5,
    pv: 28,
    amt: 24,
  },
  {
    name: 0.6,
    pv: 33,
    amt: 34,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="blue" fill="#D2E1FB" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="blue" fill="#D8EEFF" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
