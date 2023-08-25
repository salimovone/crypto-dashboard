import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        uv: 4000,
    },
    {
        uv: 3000,
    },
    {
        uv: -1000,
    },
    {
        uv: 2000,
    },
    {
        uv: -2000,
    },
    {
        uv: -250,
    },
    {
        uv: 3490,
    },
];

const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/area-chart-filled-by-sign-0h7rt';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                >
                    <Tooltip />
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="#8884d8" stopOpacity={1} />
                            <stop offset={off} stopColor="#8884d8" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="catagory" dataKey="uv" stroke="#8884d8" fill="url(#splitColor)" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
