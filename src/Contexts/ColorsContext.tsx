// Colors Context
import { ReactElement, createContext, useState, useEffect, SetStateAction } from "react";

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

interface ColorContextValuesType {
    colors: gradientsdata[]
    favourites: gradientsdata[]
    handleFavouriteChange: Function
}

export const ColorsContext = createContext({})

function ColorsContextProvider(props: colorsproviderprops) {

    // All Gradients Colors
    const [colors, setColors] = useState([] as gradientsdata[])

    // Favourites
    const [favourites, setFavourites] = useState([] as gradientsdata[])
    
    useEffect(() => {
        setColors([...JSON.parse(localStorage.getItem('gradients')!)] as gradientsdata[])
        setFavourites(JSON.parse(localStorage.getItem('gradientsFavourite')!) as gradientsdata[])
    }, [])

    useEffect(() => {
        localStorage.setItem('gradientsFavourite', JSON.stringify(favourites))
    }, [favourites])

    const handleFavouriteChange = (id: number) => {
        colors[id - 1].isFavourite = !colors[id - 1].isFavourite
        setColors(prev => {
            return [...prev]
        })
        localStorage.setItem('gradients', JSON.stringify(colors))

        if (favourites.length === 0) {
            setFavourites(() => [colors[id - 1]])
        } else {
            if (colors[id - 1].isFavourite) {
                if (!favourites.find(v => v.id === id)) {
                    setFavourites(prev => [...prev, colors[id - 1]].reverse())
                }
            } else {
                if (favourites.length === 1) {
                    setFavourites([])
                } else {
                    setFavourites(prev => prev.filter(v => v.id !== id))
                }
            }
        }
    }

    const ContextValues: ColorContextValuesType = {
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

