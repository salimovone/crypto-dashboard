import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

    state = {
        data: [
            {
                name: 'Page A',
                uv: 14,
            },
            {
                name: 'Page B',
                uv: 12,
            },
            {
                name: 'Page C',
                uv: 34,
            },
            {
                name: 'Page D',
                uv: 25,
            },
            {
                name: 'Page E',
                uv: 24,
            },
            {
                name: 'Page F',
                uv: 20,
            },
        ],
        activeIndex: 0,
    };

    handleClick = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        const { activeIndex, data } = this.state;
        const activeItem = data[activeIndex];

        return (
            <div style={{ width: '100%', height: "50%", marginTop: "20px" }}>
                <ResponsiveContainer width="100%" height={100}>
                    <BarChart width={150} height={40} data={data}>
                        <Bar dataKey="uv" onClick={this.handleClick}>
                            {data.map((entry, index) => (
                                <Cell cursor="pointer" fill={'#44C4FA'} key={`cell-${index}`} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
