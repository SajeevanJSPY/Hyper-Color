// Navbar Context
import { createContext, ReactElement, useState } from "react" 

interface navbarproviderprops {
    children: ReactElement
}

interface ContextValuesType {
    isNavbarOpen: boolean
    NavbarStateChange: Function
}

export const NavbarContext = createContext({})

function NavbarContextProvider(props: navbarproviderprops) {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const NavbarStateChange = () => {
        setIsNavbarOpen(prev => !prev)
    }

    const ContextValues = {
        isNavbarOpen,
        NavbarStateChange
    }


    return (
        <NavbarContext.Provider value={ContextValues}>
            { props.children }
        </NavbarContext.Provider>
    )
}

export default NavbarContextProvider
