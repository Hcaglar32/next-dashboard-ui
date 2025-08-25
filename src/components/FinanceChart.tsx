"use client";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Oca',
        income: 4000,
        expense: 2400,

    },
    {
        name: 'Şub',
        income: 3000,
        expense: 1398,

    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,

    },
    {
        name: 'Nis',
        income: 2780,
        expense: 3908,

    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,

    },
    {
        name: 'Haz',
        income: 2390,
        expense: 3800,

    },
    {
        name: 'Tem',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Ağu',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Eyl',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Eki',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Kas',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Ara',
        income: 3490,
        expense: 4300,

    },
];
const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
                <h1 className="text-lg font-semibold">Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                    <XAxis tickMargin={10} tick={{fill:"#d1d5db"}} tickLine={false} axisLine={false} dataKey="name" />
                    <YAxis tickMargin={20} tick={{fill:"#d1d5db"}} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Legend align="center" verticalAlign="top" wrapperStyle={{padding: '10px', paddingBottom: "30px"}}/>
                    <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
                    <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>

                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}
export default FinanceChart;