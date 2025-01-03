import React from 'react'
import LightReadingsChart from '../../../utils/chart/dashboard/LightReadingChart'

export default function LightModule({moduleId}) {
  return (
    <div className='h-full'>
        <div className='relative pl-5 flex items-center space-x-5'>
            <h1 className='text-xl font-poppins font-semibold text-gray-600'>
                Light Module
            </h1>
            <h1 className='text-md font-poppins font-semibold p-1 px-3 rounded-md bg-green-50 text-green-400'>
                Connected
            </h1>
        </div>
        <div className='h-full p-5'>
            <LightReadingsChart moduleId={moduleId}/>
        </div>
    </div>
  )
}
