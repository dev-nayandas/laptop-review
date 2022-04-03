
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import  { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Dasboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        },
    ]

    return (
        <div className='d-flex'>
            <div className='mt-5 ms-5 w-50 text-info' >
                <h1>Monthly Investment</h1>

                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey={"investment"} stroke="#8884d8" />
                    {/* <Line type="monotone" dataKey={"sell"} stroke="#8884d8" /> */}
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                </LineChart>
            </div>
            <div className='mt-5 ms-5 w-50 text-info chart' >
                <h1>Monthly Revenue</h1>
                <ResponsiveContainer width="90%" height="80%">
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="month" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#FA8072" label />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>

    );
};

export default Dasboard;