import React from 'react'
import SoilTempChart from '../../../utils/chart/dashboard/SoilTempChart'

export default function TempModule({moduleId}) {
  return (
    <div className='relative h-full'>
        <div className='relative pl-5 flex items-center space-x-5'>
            <h1 className='text-xl font-poppins font-semibold text-gray-600'>
                Temperature Sensor Module
            </h1>
            <h1 className='text-md font-poppins font-semibold p-1 px-3 rounded-md bg-green-50 text-green-400'>
                Connected
            </h1>
        </div>
        <div className='relative h-full p-5'>
            <SoilTempChart moduleId={moduleId} />
        </div>
    </div>
  )
}
