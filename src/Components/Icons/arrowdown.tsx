// Arrow Down Component

type icontype = {
    settingDirection: Function
    gradientType: string
}

const ArrowDown = ({ settingDirection, gradientType }: icontype) => {
    return (
        <div onClick={() => {
            if (gradientType === "radial") {
                settingDirection('bg-radial-at-b')
            } else if (gradientType === "gradient") {
                settingDirection('bg-gradient-to-b');
            } else if (gradientType === "conic") {
                settingDirection('bg-conic-to-b')
            }
        }} className="p-2 rounded-lg bg-[rgba(255,255,255,0.1)] w-9 h-9 flex items-center justify-center cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/org" className="h-6 w-6 text-white rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path className="group-hover:text-pink-500" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    )
}

export default ArrowDown