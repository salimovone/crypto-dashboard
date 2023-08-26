import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 0,
    },
    {
        name: 'Feb',
        uv: 9,
    },
    {
        name: 'Mar',
        uv: 16,
    },
    {
        name: 'Apr',
        uv: 19,
    },
    {
        name: 'May',
        uv: 30,
    },
    {
        name: 'Jun',
        uv: 25,
    },
    {
        name: 'Jul',
        uv: 19,
    },
    {
        name: 'Aug',
        uv: 12,
    },
    {
        name: 'Sep',
        uv: 0,
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
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
