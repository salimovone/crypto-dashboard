import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 14,
        pv: 35,
    },
    {
        name: 'Feb',
        uv: 12,
        pv: 30,
    },
    {
        name: 'Mar',
        uv: 34,
        pv: 45,
    },
    {
        name: 'Apr',
        uv: 25,
        pv: 35,
    },
    {
        name: 'May',
        uv: 44,
        pv: 55,
    },
    {
        name: 'Jun',
        uv: 40,
        pv: 26,
    },
    {
        name: 'Jul',
        uv: 35,
        pv: 10,
    },
    {
        name: 'Aug',
        uv: 25,
        pv: 20,
    },
    {
        name: 'Sep',
        uv: 30,
        pv: 25,
    },
    {
        name: 'Oct',
        uv: 32,
        pv: 55,
    },
    {
        name: 'Nov',
        uv: 20,
        pv: 50,
    },
    {
        name: 'Dec',
        uv: 45,
        pv: 55,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/line-chart-double-y-axes-4j73x';

    render() {
        return (
            <ResponsiveContainer width="110%" height="90%" className={"mt-5 xl:-ml-5"}>
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
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="catagory" dataKey="pv" stroke="#44C4FA" strokeWidth={2} />
                    <Line yAxisId="right" type="catagory" dataKey="uv" stroke="#BFBAEC" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        );
    }
} 
