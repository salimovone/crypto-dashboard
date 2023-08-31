import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Korea',
        pv: 400,
    },
    {
        name: 'Canada',
        pv: 430,
    },
    {
        name: 'Netherlands',
        pv: 448,
    },
    {
        name: 'UK',
        pv: 470,
    },
    {
        name: 'Italy',
        pv: 540,
    },
    {
        name: 'France',
        pv: 580,
    },
    {
        name: 'Japan',
        pv: 690,
    },
    {
        name: 'USA',
        pv: 1100,
    },
    {
        name: 'China',
        pv: 1200,
    },
    {
        name: 'Germany',
        pv: 1380,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" barSize={20} fill="#2192E7" />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
