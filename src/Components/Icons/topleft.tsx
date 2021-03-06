// Top Left Component

type icontype = {
    settingDirection: Function
    gradientType: string
}

const TopLeft = ({ settingDirection, gradientType }: icontype) => {
    return (
        <div onClick={() => {
            if (gradientType === "radial") {
                settingDirection('bg-radial-at-tl')
            } else if (gradientType === "gradient") {
                settingDirection('bg-gradient-to-tl');
            } else if (gradientType === "conic") {
                settingDirection('bg-conic-to-tl')
            }
        }} className="p-2 relative rounded-lg bg-[rgba(255,255,255,0.1)] w-9 h-9 flex items-center justify-center cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/org" className="group-hover:text-pink-500 h-6 w-6 text-white rotate-[225deg] absolute top-1 left-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path className="group-hover:text-pink-500" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    )
}

export default TopLeft;