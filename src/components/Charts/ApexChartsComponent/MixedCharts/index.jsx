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
        name: 'Jan 01',
        uv: 404,
        pv: 800,
    },
    {
        name: '03 Jan',
        uv: 505,
        pv: 967,
    },
    {
        name: '05 Jan',
        uv: 414,
        pv: 10,
    },
    {
        name: '06 Jan',
        uv: 781,
        pv: 1108,
    },
    {
        name: '07 Jan',
        uv: 227,
        pv: 1200,
    },
    {
        name: '09 Jan',
        uv: 753,
        pv: 1108,
    },
    {
        name: '10 Jan',
        uv: 357,
        pv: 1108,
    },
    {
        name: '11 Jan',
        uv: 261,
        pv: 680,
    },
    {
        name: '12 Jan',
        uv: 542,
        pv: 680,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

    render() {
        return (
            <ResponsiveContainer width="100%" height="90%" className={"mt-5"}>
                <ComposedChart
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
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" barSize={20} fill="#008FFB" />
                    <Line type="catagory" dataKey="uv" strokeWidth={3} stroke="#00DF94" />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
