import React from 'react'
import TempModule from './module/TempModule'    
import SoilPHModule from './module/SoilPHModule'
import SoilMoistureModule from './module/SoilMoistureModule'
import LightModule from './module/LightModule'

export default function MetricsDisplay() {
  return (
    <div className="relative h-screen bg-slate-100">
        <div className="relative mx-52">
            <div className='container grid grid-cols-2 gap-10 py-10'>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <TempModule />
                </div>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <SoilPHModule />
                </div>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <SoilMoistureModule />
                </div>
                <div className='p-5 rounded-3xl h-96 bg-white'>
                    <LightModule />
                </div>
            </div>
        </div>
    </div>
  )
}
