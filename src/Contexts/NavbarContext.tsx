// Navbar Context
import { createContext, createRef, MouseEvent, MouseEventHandler, ReactElement, useEffect, useRef, useState } from "react"

interface navbarproviderprops {
    children: ReactElement
}

interface NavbarContextValuesType {
    isNavbarOpen: boolean
    NavbarStateChange: MouseEventHandler
    isHamburgerShow: boolean
}

export const NavbarContext = createContext({})

function NavbarContextProvider(props: navbarproviderprops) {
    // Screen Width Change
    const [isHamburgerShow, setIsHamburgerShow] = useState(false)

    let media = window.matchMedia("(max-width: 800px)")

    useEffect(() => {
        setIsHamburgerShow(media.matches)
    }, [])

    media.addEventListener('change', e => {
        setIsHamburgerShow(media.matches)
    })

    // Navbar Open Things
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const NavbarStateChange = (e: MouseEvent) => {
        setIsNavbarOpen(prev => !prev)
    }

    const ContextValues: NavbarContextValuesType = {
        isNavbarOpen,
        NavbarStateChange,
        isHamburgerShow
    }

    return (
        <NavbarContext.Provider value={ContextValues}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarContextProvider
