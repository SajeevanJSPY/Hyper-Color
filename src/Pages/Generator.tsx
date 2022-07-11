// Generators Component
import { Fragment, useState, useRef, SyntheticEvent } from "react";
import Heading from "../Components/Heading";
import { tailwindCSS, code, image, refresh, pencil, bulb } from '../assests/IconsAssests'
import { fromColors, toColors, viaColors, directions } from "../assests/ColorsAssest.json"
import Option from "../Components/Option";
import useCSSCode from "../Func/useCSSCode"
import useDownloadImage from "../Func/useDownloadImage";
import CreateToast from "../Func/Toast";

function Generator() {
    const [fromValue, setFromValue] = useState(fromColors[Math.floor(Math.random() * fromColors.length)])
    const [viaValue, setViaValue] = useState(viaColors[Math.floor(Math.random() * viaColors.length)])
    const [toValue, setToValue] = useState(toColors[Math.floor(Math.random() * toColors.length)])
    const [direction, setDirection] = useState(directions[Math.floor(Math.random() * directions.length)])
    const [text, setText] = useState('Type Something...\nand Try to Change the Color')

    const style = `mx-auto w-[95%] max-w-[500px] rounded-2xl h-80 ${direction} ${fromValue} ${viaValue !== 'none' ? viaValue : ''} ${toValue}`

    function randomChecking() {
        setFromValue(fromColors[Math.floor(Math.random() * fromColors.length)])
        setViaValue(viaColors[Math.floor(Math.random() * viaColors.length)])
        setToValue(toColors[Math.floor(Math.random() * toColors.length)])
        setDirection(directions[Math.floor(Math.random() * directions.length)])
    }

    const ref = useRef<HTMLDivElement>(null)
    const refFocus = useRef<HTMLTextAreaElement>(null)

    const randomNum = Math.floor(Math.random() * 10000)
    const tailwindCode = (e: SyntheticEvent) => {
        const code = `${direction} ${fromValue} ${viaValue !== 'none' ? viaValue : ''} ${toValue}`
        navigator.clipboard.writeText(code)
        CreateToast('Copied To Clipboard')
    }
    const CSSCodeFn = useCSSCode(ref)
    const DownloadImageFn = useDownloadImage(ref, `${randomNum}`)

    function toggleTheme(e: SyntheticEvent) {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
        }
    }

    const headingProps = {
        title: "Gradient Generator",
        superTitle: "Gradient Generator for Tailwind CSS",
        content: "Create your own Tailwind CSS gradient with the full Tailwind CSS color library and the extended radial and conic gradient options provided through Hypercolor."
    }

    return (
        <Fragment>
            <Heading {...headingProps} />
            <div className="mt-8 pb-8 w-full">
                <div className="flex gap-2 px-4 py-2 items-center">
                    <div onClick={tailwindCode} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{tailwindCSS}</div>
                    <div onClick={() => CSSCodeFn()} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{code}</div>
                    <div onClick={() => DownloadImageFn()} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{image}</div>
                    <div onClick={() => randomChecking()} className="cursor-pointer group bg-[rgba(255,255,255,0.1)] p-[7px] rounded-xl">{refresh}</div>
                </div>
                <div className="flex gap-2 flex-wrap justify-evenly items-center lg:flex-nowrap mt-2">
                    <select value={direction} onChange={e => setDirection(e.target.value)} className="h-10 text-lg bg-[rgba(0,0,50,0.8)] w-[48%] max-w-[350px] cursor-pointer rounded-lg px-2 focus-visible:rounded-b-none focus:outline-none focus-within:ring-4 focus-within:ring-blue-[rgba(0,0,10,0.8)]">
                        {directions.map((v, i) => <Option value={v} key={i} />)}
                    </select>
                    <select value={fromValue} onChange={e => setFromValue(e.target.value)} className="h-10 text-lg bg-[rgba(0,0,50,0.8)] w-[48%] max-w-[350px] cursor-pointer rounded-lg px-2 focus-visible:rounded-b-none focus:outline-none focus-within:ring-4 focus-within:ring-blue-[rgba(0,0,10,0.8)]">
                        {fromColors.map((v, i) => <Option value={v} key={i} />)}
                    </select>
                    <select value={viaValue} onChange={e => setViaValue(e.target.value)} className="h-10 text-lg bg-[rgba(0,0,50,0.8)] w-[48%] max-w-[350px] cursor-pointer rounded-lg px-2 focus-visible:rounded-b-none focus:outline-none focus-within:ring-4 focus-within:ring-blue-[rgba(0,0,10,0.8)]">
                        {viaColors.map((v, i) => <Option value={v} key={i} />)}
                    </select>
                    <select value={toValue} onChange={e => setToValue(e.target.value)} className="h-10 text-lg bg-[rgba(0,0,50,0.8)] w-[48%] max-w-[350px] cursor-pointer rounded-lg px-2 focus-visible:rounded-b-none focus:outline-none focus-within:ring-4 focus-within:ring-blue-[rgba(0,0,10,0.8)]">
                        {toColors.map((v, i) => <Option value={v} key={i} />)}
                    </select>
                </div>
            </div>

            <div className="w-full py-4 flex flex-col gap-4 relative lg:flex-row lg:justify-center lg:gap-0 lg:items-center">
                <div ref={ref} className={style}></div>
                <div className="dark:bg-white relative mx-auto w-[95%] max-w-[500px] h-80 rounded-2xl overflow-hidden border-2">
                    <textarea maxLength={170} spellCheck={false} ref={refFocus} value={text} onChange={e => setText(e.target.value)} className={`${direction} ${fromValue} ${viaValue !== 'none' ? viaValue : ''} ${toValue} focus:outline-none mx-auto text-3xl p-8 w-full h-full overflow-hidden mb-8 text-center bg-clip-text text-transparent font-bold`}></textarea>
                    <div className="absolute top-1 right-4 w-16 gap-2 flex justify-evenly">
                        <div onClick={() => refFocus.current?.focus()} className="group p-2 rounded-lg bg-[rgba(255,255,255,0.1)] dark:bg-slate-500 w-9 h-9 flex items-center justify-center cursor-pointer">{pencil}</div>
                        <div onClick={toggleTheme} className="group p-2 rounded-lg bg-[rgba(255,255,255,0.1)] w-9 h-9 flex items-center dark:bg-slate-500 justify-center cursor-pointer">{bulb}</div>
                    </div>
                </div>
            </div>

        </Fragment >
    )
}

export default Generator;