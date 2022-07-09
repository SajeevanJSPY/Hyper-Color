// Hamburger Menu Details
import { MouseEventHandler, useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../Contexts/NavbarContext";
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
}

const HambBurgerMenu = () => {
    const { NavbarStateChange } = useContext(NavbarContext) as NavbarContextValuesType

    return (
        <div className="fixed z-20 flex flex-col gap-3 text-white text-xl items-center bg-[rgba(0,0,45,0.9)] py-4 transition-all ease-linear duration-150 w-full overflow-hidden rounded-b-3xl top-[57px]">
            <NavLink onClick={NavbarStateChange} to="generator" className={({ isActive }) => isActive ? `text-cyan-400 ${tabStyle} rounded-xl` : `text-white ${tabStyle} rounded-xl`}>
                Generator
            </NavLink>
            <NavLink onClick={NavbarStateChange} to="favourites" className={({ isActive }) => isActive ? `text-cyan-400 ${tabStyle} rounded-xl` : `text-white ${tabStyle} rounded-xl`}>
                Favourites
            </NavLink>
            <NavLink onClick={NavbarStateChange} to="flags" className={({ isActive }) => isActive ? `text-cyan-400 ${tabStyle} rounded-xl` : `text-white ${tabStyle} rounded-xl`}>
                Flags
            </NavLink>
            <div className="flex gap-8 mt-2">
                <a target="_blank" href={ACCOUNTS.github} className={`group cursor-pointer ${tabStyle} rounded-full`} >{github}</a>
                <a target="_blank" href={ACCOUNTS.linkedIn} className={`group text-white text-xl text-bold ${tabStyle} rounded-sm`} >{linkedIn}</a>
                <a target="_blank" href={ACCOUNTS.twitter} className={`group text-white text-xl text-bold ${tabStyle} rounded-full`} >{twitter}</a>
            </div>
        </div>
    )
}

export default HambBurgerMenu;