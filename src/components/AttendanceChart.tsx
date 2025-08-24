"use client";

import {BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Image from "next/image";

const data = [
    {
        name: 'Pzt',
        present: 60,
        absent: 40,
    },
    {
        name: 'Sal',
        present: 70,
        absent: 60,
    },
    {
        name: "Çar",
        present: 90,
        absent: 75,
    },
    {
        name: 'Per',
        present: 90,
        absent: 75,
    },
    {
        name: 'Cum',
        present: 60,
        absent: 65,
    },
];


const AttendanceChart = () => {
    return (
        <div className=" bg-white rounded-lg p-4 h-full">
            <div className='flex justify-between items-center'>
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
                    <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
                    <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgrey"}}/>
                    <Legend align="left" verticalAlign="top" wrapperStyle={{padding: '20px', paddingBottom: "40px"}}/>
                    <Bar dataKey="present" fill="#FAE27C" radius={[10,10,0,0]} legendType="circle" activeBar={<Rectangle fill="#FAE27C"/>}/>
                    <Bar dataKey="absent" fill="#C3EBFA" radius={[10,10,0,0]} legendType="circle" activeBar={<Rectangle fill="#C3EBFA" />}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart;