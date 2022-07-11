// Gradient Icons Component

// Icons Components
import ArrowUp from "./Icons/arrowup";
import ArrowDown from "./Icons/arrowdown";
import ArrowLeft from "./Icons/arrowleft";
import ArrowRight from "./Icons/arrowright";
import TopLeft from "./Icons/topleft";
import TopRight from "./Icons/topright";
import BottomLeft from "./Icons/bottomleft";
import BottomRight from "./Icons/bottomright";
import Center from "./Icons/center"

type icontype = {
    settingDirection: Function
    gradientType: string
}

const GradientIcons = ({ settingDirection, gradientType }: icontype) => {
    return (
        <main className="px-2 flex flex-wrap justify-around">
            <div className="flex gap-2 justify-around">
                <ArrowUp settingDirection={settingDirection} gradientType={gradientType} />
                <ArrowDown settingDirection={settingDirection} gradientType={gradientType} />
                <ArrowLeft settingDirection={settingDirection} gradientType={gradientType} />
                <ArrowRight settingDirection={settingDirection} gradientType={gradientType} />
                <TopLeft settingDirection={settingDirection} gradientType={gradientType} />
                <TopRight settingDirection={settingDirection} gradientType={gradientType} />
                <BottomLeft settingDirection={settingDirection} gradientType={gradientType} />
                <BottomRight settingDirection={settingDirection} gradientType={gradientType} />
            </div >
            {gradientType === "conic" || gradientType === "radial" ? <div className="flex items-center justify-center"><Center settingDirection={settingDirection} gradientType={gradientType} /></div> : null}
        </main>
    )
}

export default GradientIcons