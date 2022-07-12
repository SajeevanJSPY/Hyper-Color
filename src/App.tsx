import { Fragment, useContext } from "react"
import { Route, Routes } from "react-router-dom"

import { ColorsContext } from "./Contexts/ColorsContext";
import { NavbarContext } from "./Contexts/NavbarContext";
import Navbar from "./Components/Navbar";
import Favourites from "./Pages/Favourites";
import Flags from "./Pages/Flags";
import Generator from "./Pages/Generator";
import Gradients from "./Pages/Gradients";
import Footer from "./Components/Footer";
import NoMatch from "./Pages/NoMatch";

interface NavbarContextValuesType {
  isNavbarOpen: boolean
  isHamburgerShow: boolean
}

function App() {
  const { isNavbarOpen, isHamburgerShow } = useContext(NavbarContext) as NavbarContextValuesType

  return (
    <Fragment>
      <Navbar />
      <div className={ isNavbarOpen ? isHamburgerShow ? "mt-14 w-full blur-[1px]" : "mt-14 w-full" : "mt-14 w-full" }>
        <Routes>
          <Route element={<Gradients />} index />
          <Route element={<Favourites />} path="/favourites" />
          <Route element={<Generator />} path="/generator" />
          <Route element={<Flags />} path="/flags" />
          <Route element={<NoMatch />} path="*" />
        </Routes>
      </div>
      <Footer />
    </Fragment>
  )
}

export default App;
