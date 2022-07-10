// CSS Code Functions
import { RefObject, useCallback } from "react"
import CreateToast from "./Toast"

function useCSSCode(ref: RefObject<HTMLDivElement>) {
    return (
        useCallback(() => {
            if (ref.current === null) {
                return
            }
            const element = ref.current.parentElement as HTMLElement
            const computedValue = window.getComputedStyle(element as HTMLElement).backgroundImage
            window.navigator.clipboard.writeText(computedValue)
            CreateToast('Copied To Clipboard')
        }, [ref])
    )

}

export default useCSSCode