import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: -4000,
        pv: -2400,
    },
    {
        name: 'Page B',
        uv: -3000,
        pv: -1398,
    },
    {
        name: 'Page C',
        uv: -2000,
        pv: -5600,
    },
    {
        name: 'Page D',
        uv: -2780,
        pv: -3908,
    },
    {
        name: 'Page E',
        uv: -1890,
        pv: -4800,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                >
                    <Tooltip />
                    <Bar dataKey="uv" fill="#FFDD99" />
                    <Bar dataKey="pv" fill="#FFAB00" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
