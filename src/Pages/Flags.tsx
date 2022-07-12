// Flags Component
import { Fragment, useContext } from "react";
import Heading from "../Components/Heading";
import { ColorsContext } from "../Contexts/ColorsContext";
import Gradient from "../Components/Gradient"

type gradientsdata = {
    colors: string
    title: string
    isFavourite: boolean
    gradientType: string
    id: number
}

interface ColorContextValues {
    colors: gradientsdata[]
    flags: gradientsdata[]
    favourites: gradientsdata[]
    handleFavouriteChange: Function
}

function Flags() {
    const { flags } = useContext(ColorsContext) as ColorContextValues
    const headingProps = {
        title: "World Flags",
        superTitle: "Flag Gradients with Tailwind CSS",
        content: "A collection of country flags created with Tailwind CSS."
    }

    return (
        <Fragment>
            <Heading {...headingProps} />
            <div className="flex flex-col gap-y-24 gap-x-6 md:grid md:grid-cols-2 xl:grid-cols-3 lg:justify-between mt-14">
                {flags.length !== 0 ? flags.map(v => <Gradient key={v.id} {...v} />) : ''}
            </div>
        </Fragment>
    )
}

export default Flags;