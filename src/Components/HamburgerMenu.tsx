// Hamburger Menu Details
import { MouseEventHandler, useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../Contexts/NavbarContext";

interface NavbarContextValuesType {
    isNavbarOpen: boolean
    NavbarStateChange: MouseEventHandler
}

const HambBurgerMenu = () => {
    const { NavbarStateChange } = useContext(NavbarContext) as NavbarContextValuesType

    return (
        <div className="fixed z-20 flex flex-col gap-3 text-white text-xl items-center bg-[rgba(0,0,45,0.9)] py-4 transition-all ease-linear duration-150 w-full overflow-hidden rounded-b-3xl top-[57px]">
            <NavLink onClick={NavbarStateChange} to="generator" className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}>
                Generator
            </NavLink>
            <NavLink onClick={NavbarStateChange} to="favourites" className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}>
                Favourites
            </NavLink>
            <NavLink onClick={NavbarStateChange} to="flags" className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white'}>
                Flags
            </NavLink>
            <div className="flex gap-8">
                <div className="cursor-pointer">Github</div>
                <div className="cursor-pointer">LinkedIn</div>
                <div className="cursor-pointer">Twitter</div>
            </div>
        </div>
    )
}

export default HambBurgerMenu;