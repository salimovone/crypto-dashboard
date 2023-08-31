import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 2006,
        SeriesA: 31,
        SeriesB: 11,
      },
      {
        name: 2007,
        SeriesA: 40,
        SeriesB: 32,
      },
      {
        name: 2008,
        SeriesA: 28,
        SeriesB: 45,
      },
      {
        name: 2009,
        SeriesA: 51,
        SeriesB: 32,
      },
      {
        name: 2010,
        SeriesA: 42,
        SeriesB: 34,
      },
      {
        name: 2011,
        SeriesA: 109,
        SeriesB: 52,
      },
      {
        name: 2012,
        SeriesA: 100,
        SeriesB: 41,
      },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

    render() {
        return (
            <ResponsiveContainer width="100%" height="90%" className={"pt-5 text-sm"}>
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
                    <Area type="monotone" dataKey="SeriesA" stackId="1" strokeWidth={3} stroke="#008FFB" fill="#008FFB" />
                    <Area type="monotone" dataKey="SeriesB" stackId="1" strokeWidth={3} stroke="#2BE4AC" fill="#2BE4AC" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
