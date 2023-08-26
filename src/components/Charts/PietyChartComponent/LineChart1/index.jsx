import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    uv: 20,
  },
  {
    uv: 30,
  },
  {
    uv: 18,
  },
  {
    uv: 15,
  },
  {
    uv: 29,
  },
  {
    uv: 10,
  },
  {
    uv: 25,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
        >
          <Tooltip />
          <Area type="catagory" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
