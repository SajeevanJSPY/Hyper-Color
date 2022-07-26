// Navbar Component
import { MouseEventHandler, useContext } from "react";
import { NavLink } from "react-router-dom"
import { NavbarContext } from "../Contexts/NavbarContext";
import Hamburger from "./Hamburger";
import HambBurgerMenu from "./HamburgerMenu";
import { github, twitter, linkedIn } from "../assests/IconsAssests"

const tabStyle = "focus:outline-none focus-visible:ring-4 ring-blue-400 transition-shadow"

const ACCOUNTS = {
    github: "https://github.com/SajeevanJSPY",
    linkedIn: "https://www.linkedin.com/in/sajeevan-jspy-65a0a0244",
    twitter: "https://twitter.com/Sajeevanjspy?t=rHJOYf046WQwaRJhumfgpg&s=09"
}

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
                    <NavLink to="/" className={({ isActive }) => isActive ? `text-cyan-400 text-3xl text-bold ${tabStyle} rounded-full font-Ubuntu` : `text-white text-3xl text-bold ${tabStyle} rounded-full font-Ubuntu`} >Gradient</NavLink>
                    <Hamburger />
                </div>

                {isNavbarOpen ? <HambBurgerMenu /> : null}

            </header>
        )
    } else {
        return (
            <header>
                <div className="flex h-[57px] justify-between w-full items-center border-b-[1px] border-stone-50 px-4 py-2 fixed top-0 z-20 bg-[rgba(0,0,0,0.7)]">
                    <NavLink to="/" className={({ isActive }) => isActive ? `text-cyan-400 text-3xl text-bold ${tabStyle} rounded-full font-Ubuntu` : `text-white text-3xl text-bold ${tabStyle} rounded-full font-Ubuntu`} >Gradient</NavLink>
                    <div className="flex items-center gap-4 lg:gap-8">
                        <NavLink to="generator" className={({ isActive }) => isActive ? `text-cyan-400 text-xl text-bold ${tabStyle} rounded-lg text-2xl font-Ubuntu` : `text-white text-xl text-bold ${tabStyle} rounded-xl font-Ubuntu`} >Generator</NavLink>
                        <NavLink to="favourites" className={({ isActive }) => isActive ? `text-cyan-400 text-2xl text-bold ${tabStyle} rounded-lg font-Ubuntu` : `text-white text-xl text-bold ${tabStyle} rounded-xl font-Ubuntu`} >Favourites</NavLink>
                        <NavLink to="flags" className={({ isActive }) => isActive ? `text-cyan-400 text-2xl text-bold ${tabStyle} rounded-lg font-Ubuntu` : `text-white text-xl text-bold ${tabStyle} rounded-xl font-Ubuntu`} >Flags</NavLink>
                        <div className="flex items-center justify-center mx-16 gap-8 lg:mx-32">
                            <a target="_blank" href={ACCOUNTS.github} className={`group cursor-pointer ${tabStyle} rounded-full`} >{github}</a>
                            <a target="_blank" href={ACCOUNTS.linkedIn} className={`group text-white text-xl text-bold rounded-sm ${tabStyle}`} >{linkedIn}</a>
                            <a target="_blank" href={ACCOUNTS.twitter} className={`group text-white text-xl text-bold ${tabStyle} rounded-full`} >{twitter}</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Navbar;
