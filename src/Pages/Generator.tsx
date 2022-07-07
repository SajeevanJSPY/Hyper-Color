// Generators Component
import { Fragment } from "react";       
import Heading from "../Components/Heading";

function Generator() {

    const headingProps = {
        title: "Gradient Generator",
        superTitle: "Gradient Generator for Tailwind CSS",
        content: "Create your own Tailwind CSS gradient with the full Tailwind CSS color library and the extended radial and conic gradient options provided through Hypercolor."
    }

    return (
        <Fragment>
            <Heading { ...headingProps } />
        </Fragment>
    )
}

export default Generator;