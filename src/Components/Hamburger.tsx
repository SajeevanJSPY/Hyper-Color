// Hamburger Component
import { MouseEventHandler, useContext, Fragment } from "react";
import { NavbarContext } from "../Contexts/NavbarContext";

interface NavbarContextValuesType {
    isNavbarOpen: boolean
    NavbarStateChange: MouseEventHandler
}

const Hamburger = () => {
    const { NavbarStateChange, isNavbarOpen } = useContext(NavbarContext) as NavbarContextValuesType
    return (
        <Fragment>
            <div onClick={NavbarStateChange} className={isNavbarOpen ? "p-2 py-4 relative rounded-md hover:bg-[rgba(255,255,255,1)] group transition-all duration-100 ease-linear cursor-pointer" : "flex transition-all flex-col justify-between cursor-pointer items-center w-12 h-10 ease-linear duration-100 bg-slate-800 p-2 rounded-md hover:bg-[rgba(255,255,255,1)] group"}>
                <div className={isNavbarOpen ? "absolute rotate-45 bg-white w-8 h-1 group-hover:bg-black" : "bg-white w-8 h-1 group-hover:bg-black"}></div>
                <div className={isNavbarOpen ? "none" : "bg-white w-8 h-1 group-hover:bg-black"}></div>
                <div className={isNavbarOpen ? "bg-white w-8 h-1 -rotate-45 group-hover:bg-black" : "bg-white w-8 h-1 group-hover:bg-black"}></div>
            </div>
        </Fragment>
    )
}

export default Hamburger;