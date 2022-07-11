// Gradient Control Component

import { useRef, MouseEventHandler } from "react"
import GradientIcons from "./GradientIcons";
import { tailwindCSS, image, code } from "../assests/IconsAssests"
import useCSSCode from "../Func/useCSSCode"
import useDownloadImage from "../Func/useDownloadImage"

type gradientscontroltype = {
    settingDirection: Function
    title: string
    tailwindCode: MouseEventHandler
    gradientType: string
}

const GradientControl = ({ settingDirection, title, tailwindCode, gradientType }: gradientscontroltype) => {

    const ref = useRef<HTMLDivElement>(null)
    const CSSCodeFn = useCSSCode(ref)
    const DownloadImageFn = useDownloadImage(ref, title)

    return (
        <div ref={ref} className="rounded-2xl mx-auto w-[95%] max-w-[490px] text-xl h-32 bg-[rgba(0,0,20,0.9)] flex flex-col gap-8 absolute -bottom-24">
            <header className="flex justify-around w-full mt-4">
                <div className="text-white font-bold uppercase">{title}</div>
                <div className="text-white flex gap-4 items-center">
                    <div onClick={tailwindCode} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">
                        {tailwindCSS}
                    </div>
                    <div onClick={() => CSSCodeFn()} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{code}</div>
                    <div onClick={() => DownloadImageFn()} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{image}</div>
                </div>
            </header>
            <GradientIcons gradientType={gradientType} settingDirection={settingDirection} />
        </div>
    )
}

export default GradientControl;