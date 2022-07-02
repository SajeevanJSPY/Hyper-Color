import { Fragment, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import { ColorsContext } from "./Contexts/ColorsContext";
import Favourites from "./Pages/Favourites";
import Flags from "./Pages/Flags";
import Generator from "./Pages/Generator";
import Gradients from "./Pages/Gradients";
import NoMatch from "./Pages/NoMatch";

type gradientsdata = {
  from: string
  via?: string
  to: string
  title: string
  isFavourite: boolean
  id: number
}

interface ColorContextValues {
  colors: gradientsdata[],
  favourites: gradientsdata[],
  handleFavouriteChange: Function
}

function App() {
  const ColorContext = useContext(ColorsContext) as ColorContextValues
  
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route element={<Gradients />} index />
        <Route element={<Favourites />} path="/favourites" />
        <Route element={<Generator />} path="/generator" />
        <Route element={<Flags />} path="/flags" />
        <Route element={<NoMatch />} path="*" />
      </Routes>
    </Fragment>
  )
}

export default App;
