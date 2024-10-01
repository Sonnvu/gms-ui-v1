import logo from './Logo.png';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header class="sticky bg-white inset-x-0 top-0 z-50">
            <nav class="flex lg:px-8 ">
                <div class="flex pr-40 pl-14 py-3 ">
                    <Link to="/Portfolio" class="p-1.5"
                          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    >
                        <span class="sr-only">Your Company</span>
                        <img class="h-10 w-auto" src={logo} alt=""/>
                    </Link>
                </div>
                <div class="flex gap-x-10 items-center">
                    <Link to="" class="flex items-center h-full px-5 text-base font-semibold leading-6 text-gray-700 border-b-2 border-transparent hover:border-b-emerald-500 transition-colors duration-300 ease-in-out">Dashboard</Link>
                    <Link to="" class="flex items-center h-full px-5 text-base font-semibold leading-6 text-gray-700 border-b-2 border-transparent hover:border-b-emerald-500 transition-colors duration-300 ease-in-out">Weather</Link>
                    <Link to="" class="flex items-center h-full px-5 text-base font-semibold leading-6 text-gray-700 border-b-2 border-transparent hover:border-b-emerald-500 transition-colors duration-300 ease-in-out">Soil pH</Link>
                    <Link to="" class="flex items-center h-full px-5 text-base font-semibold leading-6 text-gray-700 border-b-2 border-transparent hover:border-b-emerald-500 transition-colors duration-300 ease-in-out">Soil Moisture</Link>
                </div>
                <div class="hidden lg:flex items-center lg:flex-1 lg:justify-end pr-14">
                    <Link to="/Portfolio#contact" class="text-base font-semibold leading-6 text-gray-700">Documentation <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>
        </header>
    )
}