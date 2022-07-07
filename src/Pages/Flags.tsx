// Flags Component
import { Fragment } from "react";
import Heading from "../Components/Heading";

function Flags() {

    const headingProps = {
        title: "World Flags",
        superTitle: "Flag Gradients with Tailwind CSS",
        content: "A collection of country flags created with Tailwind CSS."
    }

    return (
        <Fragment>
            <Heading { ...headingProps } />

        </Fragment>
    )
}

export default Flags;