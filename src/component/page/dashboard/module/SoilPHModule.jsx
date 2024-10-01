import React from 'react'
import DemoLineChart from '../../../utils/chart/DemoLineChart'

export default function SoilPHModule() {
  return (
    <div className='h-full'>
        <div className='relative pl-5 flex items-center space-x-5'>
            <h1 className='text-xl font-poppins font-semibold text-gray-600'>
                Soil pH Module
            </h1>
            <h1 className='text-md font-poppins font-semibold p-1 px-3 rounded-md bg-yellow-50 text-yellow-500'>
                Connecting
            </h1>
        </div>
        <div className='h-full p-5'>
            <DemoLineChart />
        </div>
    </div>
  )
}