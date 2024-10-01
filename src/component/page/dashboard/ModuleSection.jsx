import React from 'react'

export default function ModuleSection() {
  return (
    <div className="bg-slate-50 py-10">
        <div className="relative flex flex-row bg-white rounded-3xl mx-52">
            <div className="flex flex-col ml-24 items-center p-10  space-y-5">
                <h1 className="flex text-3xl font-poppin font-bold tracking-wide text-gray-700 ">Garden 1 Display</h1>
                <div className="relative flex items-center space-x-2 bg-white rounded-lg">
                    <h1 className="text-md font-poppin font-medium pl-3">Status</h1>
                    <div className="text-md font-poppin font-medium p-1 px-3 rounded-md bg-green-50 text-green-400">Active</div>
                </div>
            </div>
            <div className="relative flex flex-1 mr-24 items-center justify-end p-10">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <h1 className="text-md font-poppin font-medium text-slate-800 pl-3">Registered: </h1>
                        <h1 className="text-md font-poppin font-medium text-slate-500 pl-3">09/30/2024 </h1>
                    </div>
                    <div className="flex flex-row">
                        <h1 className="text-md font-poppin font-medium text-slate-800 pl-3">Sensors Connected: </h1>
                        <h1 className="text-md font-poppin font-medium text-slate-500 pl-3">4 </h1>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
