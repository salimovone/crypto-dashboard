import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 10,
    },
    {
        name: 'Feb',
        uv: 41,
    },
    {
        name: 'Mar',
        uv: 35,
    },
    {
        name: 'Apr',
        uv: 51,
    },
    {
        name: 'May',
        uv: 49,
    },
    {
        name: 'Jun',
        uv: 62,
    },
    {
        name: 'Jul',
        uv: 69,
    },
    {
        name: 'Aug',
        uv: 91,
    },
    {
        name: 'Sep',
        uv: 148,
      },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';

    render() {
        return (
            <ResponsiveContainer width="100%" height="90%" className={"pt-5 xl:-ml-5"}>
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="category" dataKey="uv" stroke="#249EFB" strokeWidth={3}/>
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
