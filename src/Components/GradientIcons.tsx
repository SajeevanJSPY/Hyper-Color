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

type icontype = {
    settingDirection: Function
}

const GradientIcons = ({ settingDirection }: icontype) => {
    return (
        <main className="px-4 flex justify-around">
            <ArrowUp settingDirection={settingDirection} />
            <ArrowDown settingDirection={settingDirection} />
            <ArrowLeft settingDirection={settingDirection} />
            <ArrowRight settingDirection={settingDirection} />
            <TopLeft settingDirection={settingDirection} />
            <TopRight settingDirection={settingDirection} />
            <BottomLeft settingDirection={settingDirection} />
            <BottomRight settingDirection={settingDirection} />
        </main>
    )
}

export default GradientIcons