import React, { useState } from 'react'
import Header from '../../utils/header/Header'
import ModuleSection from './ModuleSection'
import MetricsDisplay from './MetricsDisplay'
import SideBar from './SideBar'

export default function DashBoard() {
  const [activeModule, setActiveModule] = useState(1); 
  return (
    <div>
        <Header />
        <div className='flex'>
          <div className="bg-white">
            <SideBar activeModule={activeModule} setActiveModule={setActiveModule}/>
          </div>
          <div className="w-full">
            <ModuleSection />
            <MetricsDisplay moduleId={activeModule}/>
          </div>
        </div>
    </div>
  )
}
