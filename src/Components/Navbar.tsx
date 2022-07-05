// Navbar Component
import { MouseEventHandler, useContext } from "react";
import { NavLink } from "react-router-dom"
import { NavbarContext } from "../Contexts/NavbarContext";
import Hamburger from "./Hamburger";
import HambBurgerMenu from "./HamburgerMenu";

interface NavbarContextValuesType {
    isNavbarOpen: boolean
    NavbarStateChange: MouseEventHandler
    isHamburgerShow: boolean
}

const Navbar = () => {
    const { isNavbarOpen, isHamburgerShow } = useContext(NavbarContext) as NavbarContextValuesType

    if (isHamburgerShow) {
        return (
            <header>
                <div className="flex flex-row justify-between w-full items-center h-[57px] border-b-[1px] border-stone-50 px-4 py-2 fixed top-0 z-20 bg-[rgba(0,0,0,0.7)]">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-cyan-400 text-3xl text-bold' : 'text-white text-3xl text-bold'} >Gradient</NavLink>
                    <Hamburger />
                </div>

                {isNavbarOpen ? <HambBurgerMenu /> : null}

            </header>
        )
    } else {
        return (
            <header>
                <div className="flex h-[57px] justify-between w-full items-center border-b-[1px] border-stone-50 px-4 py-2 fixed top-0 z-20 bg-[rgba(0,0,0,0.7)]">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-cyan-400 text-3xl text-bold' : 'text-white text-3xl text-bold'} >Gradient</NavLink>
                    <div className="flex items-center gap-4">
                        <NavLink to="generator" className={({ isActive }) => isActive ? 'text-cyan-400 text-xl text-bold' : 'text-white text-xl text-bold'} >Generator</NavLink>
                        <NavLink to="favourites" className={({ isActive }) => isActive ? 'text-cyan-400 text-xl text-bold' : 'text-white text-xl text-bold'} >Favourites</NavLink>
                        <NavLink to="flags" className={({ isActive }) => isActive ? 'text-cyan-400 text-xl text-bold' : 'text-white text-xl text-bold'} >Flags</NavLink>
                        <div className="flex items-center gap-3 mx-8">
                            <NavLink to="generator" className="text-white text-xl text-bold" >Github</NavLink>
                            <NavLink to="generator" className="text-white text-xl text-bold" >LinkedIn</NavLink>
                            <NavLink to="generator" className="text-white text-xl text-bold" >Twitter</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Navbar;
