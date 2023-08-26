import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data = [
    { name: 'Jan', value: 15, fill: "#7538FD" },
    { name: 'May', value: 50, fill: "#E0E7F4" },
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
