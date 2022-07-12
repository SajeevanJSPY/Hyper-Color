// No Match Component
import { NavLink } from "react-router-dom";

function NoMatch() {
    const star = <svg className='h-12 w-12' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'><path className="group-hover:text-pink-400 animate-forStar" strokeLinecap='round' strokeLinejoin='round' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' /></svg>
    setTimeout(() => {
        location.replace('/')
    }, 2000)
    return (
        <div className="w-full h-[70vh] flex flex-col gap-2 items-center justify-center">
            <div className="group cursor-pointer">{star}</div>
            <div className="text-3xl">This page could not be found</div>
            <NavLink to="/" className="text-xl">Back to the home page</NavLink>
        </div>
    )
}

export default NoMatch;