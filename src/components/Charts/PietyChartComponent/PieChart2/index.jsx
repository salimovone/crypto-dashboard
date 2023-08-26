import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data = [
    { name: 'May', value: 26, fill: "#E0E7F4" },
    { name: 'Jan', value: 35, fill: "#7538FD" },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-in-responsive-container-qyv6t';

    render() {
        return (
            <div style={{ width: '100%', height: "100%" }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
