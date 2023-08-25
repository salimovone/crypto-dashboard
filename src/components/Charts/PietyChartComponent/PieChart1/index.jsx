import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data = [
    { name: 'Jan', value: 35, fill: "#664DC9" },
    { name: 'Feb', value: 24, fill: "#FFAB00" },
    { name: 'Mar', value: 15, fill: "#3E80EB" },
    { name: 'Apr', value: 8, fill: "#38CB89" },
    { name: 'May', value: 20, fill: "#44C4FA" },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-in-responsive-container-qyv6t';

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <ResponsiveContainer>
                    <PieChart outerRadius={100} innerRadius={100}>
                        <Pie dataKey="value" data={data} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
