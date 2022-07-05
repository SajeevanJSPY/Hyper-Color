// Colors Context
import { ReactElement, createContext, useState, useEffect } from "react";

interface colorsproviderprops {
    children: ReactElement
}

type gradientsdata = {
    from: string
    via?: string
    to: string
    title: string
    isFavourite: boolean
    id: number
}

interface ContextValuesType {
    colors: gradientsdata[]
    favourites: gradientsdata[]
    handleFavouriteChange: Function
}

export const ColorsContext = createContext({})

function ColorsContextProvider(props: colorsproviderprops) {

    // All Gradients Colors
    const [colors, setColors] = useState([...JSON.parse(localStorage.getItem('gradients')!)])

    // Favourites
    const [favourites, setFavourites] = useState([...JSON.parse(localStorage.getItem('gradientsFavourite')!)])

    const handleFavouriteChange = (id: number) => {
        colors[id - 1].isFavourite = !colors[id - 1].isFavourite
        setColors(prev => {
            return [...prev]
        })
        
        localStorage.setItem('gradients', JSON.stringify(colors))

        if (!favourites.find(v => v.id === id)) {
            setFavourites(prev => {
                return [...prev, colors[id - 1]]
            })
            localStorage.setItem('gradientsFavourite', JSON.stringify(favourites))
        }
    }

    const ContextValues: ContextValuesType = {
        colors,
        favourites,
        handleFavouriteChange
    }

    return (
        <ColorsContext.Provider value={ContextValues} >
            {props.children}
        </ColorsContext.Provider>
    )
}

export default ColorsContextProvider

