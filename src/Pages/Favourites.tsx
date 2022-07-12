// Favourites Component
import { Fragment, useContext } from "react"
import { ColorsContext } from "../Contexts/ColorsContext"
import Gradient from "../Components/Gradient"
import Heading from "../Components/Heading"

type gradientsdata = {
    colors: string
    title: string
    isFavourite: boolean
    gradientType: string
    id: number
}

interface ColorContextValuesType {
    colors: gradientsdata[]
    flags: gradientsdata[]
    favourites: gradientsdata[]
    handleFavouriteChange: Function
}

function Favourites() {
    const { favourites } = useContext(ColorsContext) as ColorContextValuesType

    const headingProps = {
        title: "Favourite Gradients",
        superTitle: "Your Favourite Hypercolor Gradients",
        content: "Easily view all your favourite Hypercolor gradients for quick access to their Tailwind CSS classes, CSS code and image download."
    }
    return (
        <Fragment>
            <Heading {...headingProps} />
            <div className="flex flex-col gap-y-24 gap-x-6 md:grid md:grid-cols-2 xl:grid-cols-3 lg:justify-between mt-14">
                {favourites.length !== 0 ? favourites.map(v => <Gradient key={v.id} {...v} />) : ''}
            </div>

        </Fragment>
    )
}

export default Favourites;