// Favourites Component
import { useContext } from "react"
import { ColorsContext } from "../Contexts/ColorsContext"
import Gradient from "../Components/Gradient"

type gradientsdata = {
    from: string
    via ?: string
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

function Favourites() {
    const { favourites } = useContext(ColorsContext) as ColorContextValuesType
    
    return (
        <div className="flex flex-col gap-y-24 gap-x-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:justify-between mt-14">
            { favourites.length !== 0 ? favourites.map(v => <Gradient key={v.id} {...v} />) : '' }
        </div>
    )
}

export default Favourites;