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
        name: 'Jan',
        MyFirstDataset: 100,
        MySecondDataset: 28,
    },
    {
        name: 'Feb',
        MyFirstDataset: 70,
        MySecondDataset: 48,
    },
    {
        name: 'Apr',
        MyFirstDataset: 40,
        MySecondDataset: 20,
    },
    {
        name: 'May',
        MyFirstDataset: 120,
        MySecondDataset: 86,
    },
    {
        name: 'Jun',
        MyFirstDataset: 50,
        MySecondDataset: 27,
    },
    {
        name: 'Jul',
        MyFirstDataset: 70,
        MySecondDataset: 20,
    },
    {
        name: 'Aug',
        MyFirstDataset: 90,
        MySecondDataset: 50,
    },
    {
        name: 'Sep',
        MyFirstDataset: 50,
        MySecondDataset: 50,
    },
    {
        name: 'Oct',
        MyFirstDataset: 100,
        MySecondDataset: 20,
    },
    {
        name: 'Nov',
        MyFirstDataset: 50,
        MySecondDataset: 90,
    },
    {
        name: 'Dec',
        MyFirstDataset: 90,
        MySecondDataset: 20,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/composed-chart-with-axis-label-55s1s';

    render() {
        return (
            <ResponsiveContainer  className={"pt-5 xl:-ml-5 w-fit"} height="95%">
                <ComposedChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" label={{ position: 'insideBottomRight', offset: 0 }} scale="band" />
                    <YAxis label={{ angle: -100, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Area type="redLine"  dataKey="MySecondDataset" fill="#A882E4" stroke="#A882E4" />
                    <Line type="redLine" dataKey="MyFirstDataset" stroke="#DD79B1" />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
