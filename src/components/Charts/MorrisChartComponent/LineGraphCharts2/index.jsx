import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 2006,
    SeriesA: 100,
    SeriesB: 90,
  },
  {
    name: 2007,
    SeriesA: 75,
    SeriesB: 65,
  },
  {
    name: 2008,
    SeriesA: 50,
    SeriesB: 40,
  },
  {
    name: 2009,
    SeriesA: 75,
    SeriesB: 65,
  },
  {
    name: 2010,
    SeriesA: 50,
    SeriesB: 40,
  },
  {
    name: 2011,
    SeriesA: 75,
    SeriesB: 65,
  },
  {
    name: 2012,
    SeriesA: 100,
    SeriesB: 90,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="108%" height="90%" className={"pt-5 xl:-ml-10"}>
        <LineChart
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
          <Line type="monotone" dataKey="SeriesA" stroke="#3F2698" strokeWidth={3}/>
          <Line type="monotone" dataKey="SeriesB" stroke="#84279A" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
