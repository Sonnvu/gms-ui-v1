import React from 'react'
import Header from '../../utils/header/Header'
import ModuleSection from './ModuleSection'
import MetricsDisplay from './MetricsDisplay'

export default function DashBoard() {
  return (
    <div>
        <Header />
        <ModuleSection />
        <MetricsDisplay />
    </div>
  )
}
