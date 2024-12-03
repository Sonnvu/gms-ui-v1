import React from 'react'
import TempModule from './sensors/TempModule'    
import SoilPHModule from './sensors/SoilPHModule'
import SoilMoistureModule from './sensors/SoilMoistureModule'
import LightModule from './sensors/LightModule'

export default function MetricsDisplay({moduleId}) {
  return (
    <div className="relative h-screen bg-slate-100">
        <div className="relative mx-32">
            <div className=' flexcontainer grid grid-cols-2 gap-10 py-10'>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <TempModule moduleId={moduleId}/>
                </div>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <SoilPHModule />
                </div>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <SoilMoistureModule moduleId={moduleId}/>
                </div>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <LightModule moduleId={moduleId}/>
                </div>
            </div>
        </div>
    </div>
  )
}
