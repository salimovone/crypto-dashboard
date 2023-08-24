import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '01 Jan',
        uv: 13,
        pv: 44,
        ov: 11,
        sv: 21,
    },
    {
        name: '02 Jan',
        uv: 23,
        pv: 55,
        ov: 17,
        sv: 7,
    },
    {
        name: '03 Jan',
        uv: 20,
        pv: 41,
        ov: 15,
        sv: 25,
    },
    {
        name: '04 Jan',
        uv: 8,
        pv: 67,
        ov: 15,
        sv: 13,
    },
    {
        name: '05 Jan',
        uv: 13,
        pv: 22,
        ov: 21,
        sv: 22,
    },
    {
        name: '06 Jan',
        uv: 27,
        pv: 43,
        ov: 14,
        sv: 8,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

    render() {
        return (
            <ResponsiveContainer width="110%" height="90%" className={'xl:-ml-10 pt-5'}>
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
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#008FFB" />
                    <Bar dataKey="uv" stackId="a" fill="#00E396" />
                    <Bar dataKey="ov" stackId="a" fill="#FEB019" />
                    <Bar dataKey="sv" stackId="a" fill="#FF4560" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
