import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Feb',
        uv: 76,
        pv: 44,
    },
    {
        name: 'Mar',
        uv: 85,
        pv: 55,
    },
    {
        name: 'Apr',
        uv: 101,
        pv: 57,
    },
    {
        name: 'May',
        uv: 98,
        pv: 56,
    },
    {
        name: 'Jun',
        uv: 97,
        pv: 51,
    },
    {
        name: 'Jul',
        uv: 105,
        pv: 58,
    },
    {
        name: 'Aug',
        uv: 100,
        pv: 61,
    },
    {
        name: 'Sep',
        uv: 114,
        pv: 60,
    },
    {
        name: 'Oct',
        uv: 104,
        pv: 56,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/bar-chart-with-double-yaxis-zr232';

    render() {
        return (
            <ResponsiveContainer width="115%" height="90%" className={"pt-5 xl:-ml-10"}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="pv" fill="#008DF7" radius={20}/>
                    <Bar yAxisId="right" dataKey="uv" fill="#00DF94" radius={20}/>
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
