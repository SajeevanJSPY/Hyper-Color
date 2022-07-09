// Gradient Control Component

import { useRef, useCallback, MouseEventHandler } from "react"
import { toJpeg } from "html-to-image"
import GradientIcons from "./GradientIcons";
import { tailwindCSS, image, code } from "../assests/IconsAssests"

type gradientscontroltype = {
    settingDirection: Function
    title: string
    tailwindCode: MouseEventHandler
    cssCode: MouseEventHandler
}

const GradientControl = ({ settingDirection, title, tailwindCode, cssCode }: gradientscontroltype) => {

    const ref = useRef<HTMLDivElement>(null)

    const htmlToImageFn = useCallback(() => {
        if (ref.current === null) {
            return
        }
        const mainEle = ref.current.parentElement as HTMLElement
        const computedStyle = window.getComputedStyle(mainEle)
        const newEle = mainEle.cloneNode(false) as HTMLElement
        newEle.style.backgroundImage = computedStyle.backgroundImage
        newEle.style.width = '500px'
        newEle.style.height = '500px'
        newEle.style.borderRadius = '20px'
        
        toJpeg(newEle, { pixelRatio: 1, quality: 1, width: 1000, height: 1000, cacheBust: true })
            .then(dataURL => {
                const anchor = document.createElement('a') as HTMLAnchorElement
                anchor.href = dataURL
                anchor.download = `${title}-image.jpeg`
                anchor.click()
            })
            .catch(err => {
                console.error(err);
            })

    }, [ref])
    return (
        <div ref={ref} className="rounded-2xl mx-auto w-[95%] max-w-[490px] text-xl h-32 bg-[rgba(0,0,20,0.9)] flex flex-col gap-8 absolute -bottom-24">
            <header className="flex justify-around w-full mt-4">
                <div className="text-white font-bold uppercase">{title}</div>
                <div className="text-white flex gap-4 items-center">
                    <div onClick={tailwindCode} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">
                        {tailwindCSS}
                    </div>
                    <div onClick={cssCode} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{code}</div>
                    <div onClick={() => htmlToImageFn()} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{image}</div>
                </div>
            </header>
            <GradientIcons settingDirection={settingDirection} />
        </div>
    )
}

export default GradientControl;