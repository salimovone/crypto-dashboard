import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

    render() {
        return (
            <ResponsiveContainer width="100%" height="90%" className={"pt-5"}>
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
                    <Area type="monotone" dataKey="SeriesA" stackId="1" strokeWidth={3} stroke="#3F2698" fill="#3F2698" />
                    <Area type="monotone" dataKey="SeriesB" stackId="1" strokeWidth={3} stroke="#84279A" fill="#84279A" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
