// Gradients Component
import { Fragment, useContext } from "react"
import Gradient from "../Components/Gradient"
import { ColorsContext } from "../Contexts/ColorsContext"

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

function Gradients() {
    const { colors } = useContext(ColorsContext) as ColorContextValues
    
    return (
        <div className="flex flex-col gap-y-24 gap-x-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:justify-between mt-14">
            { colors.map(v => <Gradient key={v.id} { ...v } />) }
        </div>
    )
}

export default Gradients