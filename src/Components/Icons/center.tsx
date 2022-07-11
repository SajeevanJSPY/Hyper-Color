// Center Component
import { center } from "../../assests/IconsAssests"

type icontype = {
    settingDirection: Function
    gradientType: string
}

function Center({ settingDirection, gradientType }: icontype) {
    return (
        <div onClick={() => {
            if (gradientType === "radial") {
                settingDirection('bg-radial')
            } else if (gradientType === "conic") {
                settingDirection('bg-conic')
            }
            
        }} className="p-2 relative rounded-lg bg-[rgba(255,255,255,0.1)] w-9 h-9 flex items-center justify-center cursor-pointer group">
            {center}
        </div>
    )
}

export default Center