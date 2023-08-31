import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        dataset1: 35,
        dataset2: 28,
        amt: 7900,
    },
    {
        name: 'Feb',
        dataset1: 59,
        dataset2: 48,
        amt: 2210,
    },
    {
        name: 'Mar',
        dataset1: 80,
        dataset2: 40,
        amt: 2290,
    },
    {
        name: 'Apr',
        dataset1: 81,
        dataset2: 19,
        amt: 2000,
    },
    {
        name: 'May',
        dataset1: 56,
        dataset2: 86,
        amt: 2181,
    },
    {
        name: 'Jun',
        dataset1: 55,
        dataset2: 27,
        amt: 2500,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {
        return (
            <ResponsiveContainer width="100%" height="90%" className={"pt-4 xl:-ml-5 text-sm"}>
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
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="dataset1" fill="#DD79B1" />
                    <Bar dataKey="dataset2" fill="#A882E4" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
