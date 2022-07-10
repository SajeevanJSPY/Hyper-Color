// Gradient Component
import { SyntheticEvent, useContext, useState } from "react";
import { ColorsContext } from "../Contexts/ColorsContext";
import GradientControl from "./GradientControl";
import CreateToast from "../Components/Toast"

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

const Gradient = ({ from, via, to, title, isFavourite, id }: gradientsdata) => {
    const { handleFavouriteChange } = useContext(ColorsContext) as ColorContextValues
    const [direction, setDirection] = useState('bg-gradient-to-r');

    const settingDirection = (direction: string) => {
        setDirection(direction);
    }

    const tailwindCode = (e: SyntheticEvent) => {
        const code = `${direction} from-${from}${via ? ' via-' + via : ''} to-${to}`
        navigator.clipboard.writeText(code)
        CreateToast('Copied To Clipboard')
    }
    
    // default Style
    const defaultStyle = "container flex items-start justify-center relative mx-auto w-[95%] max-w-[500px] mt-4 mb-4 rounded-2xl h-64";
    const style = `${defaultStyle} ${direction} from-${from}${via ? ' via-' + via : ''} to-${to}`;

    const GradientControlProps = {
        settingDirection,
        title,
        tailwindCode
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