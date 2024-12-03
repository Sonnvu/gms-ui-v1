export default function SideBar({ activeModule, setActiveModule }) {
    return (
        <div className="px-5 py-3 space-y-3 pt-10">
            <div className={`bg-slate-100 w-56 flex align-middle px-5 py-3 rounded-xl cursor-pointer ${activeModule === 1 ? 'bg-green-200' : ''}`}
                onClick={() => setActiveModule(1)}>
                <p className="text-md font-poppin font-medium ">Module 1</p>
            </div>  
            <div className={`bg-slate-100 w-56 flex align-middle px-5 py-3 rounded-xl cursor-pointer ${activeModule === 2 ? 'bg-green-200' : ''}`}
                onClick={() => setActiveModule(2)}>
                <p className="text-md font-poppin font-medium ">Module 2</p>
            </div> 
            <div className="bg-slate-100 w-56 flex align-middle px-5 py-3 rounded-xl">
                <p className="text-md font-poppin font-medium ">+ Add Module</p>
            </div>
        </div>
    )
}