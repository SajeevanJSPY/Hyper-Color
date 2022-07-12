// Colors Context
import { ReactElement, createContext, useState, useEffect, useRef } from "react";
import CreateToast from "../Func/Toast"

interface colorsproviderprops {
    children: ReactElement
}

type gradientsdata = {
    colors: string
    gradientType: string
    title: string
    isFavourite: boolean
    id: number
}

interface ColorContextValuesType {
    colors: gradientsdata[]
    flags: gradientsdata[]
    favourites: gradientsdata[]
    handleFavouriteChange: Function
}

export const ColorsContext = createContext({})

function ColorsContextProvider(props: colorsproviderprops) {

    const ref = useRef(false)

    // All Gradients Colors
    const [colors, setColors] = useState([] as gradientsdata[])

    // Favourites
    const [favourites, setFavourites] = useState([] as gradientsdata[])

    // Flags 
    const [flags, setFlags] = useState([] as gradientsdata[])

    useEffect(() => {
        setColors([...JSON.parse(localStorage.getItem('gradients')!)] as gradientsdata[])
        setFlags(JSON.parse(localStorage.getItem('flags')!) as gradientsdata[])
        setFavourites(JSON.parse(localStorage.getItem('gradientsFavourite')!) as gradientsdata[])
    }, [])

    useEffect(() => {
        if (ref.current === true) {
            localStorage.setItem('gradientsFavourite', JSON.stringify(favourites))
        }
        return () => {
            ref.current = true
        }
    }, [favourites])

    const handleFavouriteChange = (id: number) => {
        if (id > 87) {
            flags[id - 88].isFavourite = !flags[id - 88].isFavourite
            setFlags(prev => [...prev])
            localStorage.setItem('flags', JSON.stringify(flags))
            if (favourites.length === 0) {
                setFavourites(() => [flags[id - 88]])
                CreateToast('Added To Favourites')
            } else {
                if (flags[id - 88].isFavourite) {
                    if (!favourites.find(v => v.id === id)) {
                        setFavourites(prev => [...prev, flags[id - 88]].reverse())
                    }
                    CreateToast('Added To Favourites')
                } else {
                    if (favourites.length === 1) {
                        setFavourites([])
                        CreateToast('Removed From Favourites')
                    } else {
                        setFavourites(prev => prev.filter(v => v.id !== id))
                        CreateToast('Removed From Favourites')
                    }
                }
            }
        } else {
            colors[id - 1].isFavourite = !colors[id - 1].isFavourite
            setColors(prev => [...prev])
            localStorage.setItem('gradients', JSON.stringify(colors))
            if (favourites.length === 0) {
                setFavourites(() => [colors[id - 1]])
                CreateToast('Added To Favourites')
            } else {
                if (colors[id - 1].isFavourite) {
                    if (!favourites.find(v => v.id === id)) {
                        setFavourites(prev => [...prev, colors[id - 1]].reverse())
                    }
                    CreateToast('Added To Favourites')
                } else {
                    if (favourites.length === 1) {
                        setFavourites([])
                        CreateToast('Removed From Favourites')
                    } else {
                        setFavourites(prev => prev.filter(v => v.id !== id))
                        CreateToast('Removed From Favourites')
                    }
                }
            }
        }

    }

    const ContextValues: ColorContextValuesType = {
        colors,
        flags,
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

