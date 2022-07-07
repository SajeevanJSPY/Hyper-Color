// Gradients Component
import { Fragment, useContext } from "react"
import Gradient from "../Components/Gradient"
import { ColorsContext } from "../Contexts/ColorsContext"
import Heading from "../Components/Heading"

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

    const headingProps = {
        title: "HyperColor",
        superTitle: "Gradients for Tailwind CSS",
        content: "A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image."
    }
    
    return (
        <Fragment>
            <Heading { ...headingProps } />
            <div className="flex flex-col gap-y-24 gap-x-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:justify-between mt-14">
                {colors.length !== 0 ? colors.map(v => <Gradient key={v.id} {...v} />) : ''}
            </div>

        </Fragment>
    )
}

export default Gradients