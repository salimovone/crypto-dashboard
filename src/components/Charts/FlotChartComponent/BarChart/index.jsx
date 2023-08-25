import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 0,
        pv: 20,
    },
    {
        name: 1,
        pv: 35,
    },
    {
        name: 2,
        pv: 25,
    },
    {
        name: 3,
        pv: 22,
    },
    {
        name: 4,
        pv: 18,
    },
    {
        name: 5,
        pv: 28,
    },
    {
        name: 6,
        pv: 32,
    },
    {
        name: 7,
        pv: 35,
    },
    {
        name: 8,
        pv: 48,
    },
    {
        name: 9,
        pv: 30,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

    render() {
        return (
            <ResponsiveContainer width="100%" height="90%" className={"mt-5"}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#44C4FA" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
