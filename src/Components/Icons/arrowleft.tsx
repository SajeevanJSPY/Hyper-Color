// Arrow left Component

type icontype = {
    settingDirection: Function
}

const ArrowLeft = ({ settingDirection }: icontype) => {
    return (
        <div onClick={() => {
            settingDirection('bg-gradient-to-l');
        }} className="p-2 rounded-lg bg-[rgba(255,255,255,0.3)] w-9 h-9 flex items-center justify-center cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/org" className="group-hover:text-pink-500 h-6 w-6 text-white rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    )
}

export default ArrowLeft;