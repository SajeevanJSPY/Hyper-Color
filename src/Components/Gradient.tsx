// Gradient Component
import { useContext, useEffect, useState } from "react";
import { ColorsContext } from "../Contexts/ColorsContext";
import GradientControl from "./GradientControl";
import CreateToast from "../Func/Toast"

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

const Gradient = ({ colors, title, isFavourite, gradientType, id }: gradientsdata) => {
    const { handleFavouriteChange } = useContext(ColorsContext) as ColorContextValues
    const [direction, setDirection] = useState('bg-gradient-to-r');

    const Directions = ['t', 'l', 'r', 'b', 'tl', 'tr', 'bl', 'br', 'center']

    useEffect(() => {
        const random = Directions[Math.floor(Math.random() * Directions.length)]
        if (gradientType === "radial") {
            if (random === 'center') {
                setDirection('bg-radial')
            } else {
                setDirection(`bg-radial-at-${random}`)
            }
        }
        if (gradientType === "conic") {
            if (random === 'center') {
                setDirection('bg-conic')
            } else {
                setDirection(`bg-conic-to-${random}`)
            }
        }
    }, [])

    const settingDirection = (direction: string) => {
        setDirection(direction);
    }

    const tailwindCode = () => {
        let code: string
        if(gradientType === 'flag') {
            code = `${colors}`
        } else {
            code = `${direction} ${colors}`
        }
        navigator.clipboard.writeText(code)
        CreateToast('Copied To Clipboard')
    }

    // default Style
    const defaultStyle = `container flex items-start justify-center relative mx-auto w-[95%] max-w-[500px] mt-4 ${gradientType === "conic" || gradientType === "radial" ? 'mb-8' : 'mb-4'} rounded-2xl h-64`;
    const style = `${defaultStyle} ${!(gradientType === 'flag') ? direction : ''} ${colors}`;

    const GradientControlProps = {
        settingDirection,
        title,
        tailwindCode,
        gradientType
    }
    return (
        <div className={style}>
            <GradientControl {...GradientControlProps} />
            <div onClick={e => {
                e.preventDefault();
                handleFavouriteChange(id);
            }} className="h-10 absolute right-6 top-6 w-10 flex items-center justify-center rounded-full bg-[rgba(0,0,50,0.95)] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className={isFavourite ? 'h-6 w-6 text-pink-400' : "h-6 w-6 text-white"} fill={isFavourite ? 'pink' : 'white'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path className={isFavourite ? "text-pink-400" : "text-white"} strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
        </div>
    )
}

export default Gradient;