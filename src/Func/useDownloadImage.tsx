// Downloading Image Function
import { RefObject, useCallback } from "react";
import { toJpeg } from "html-to-image"
import CreateToast from "./Toast"

function useDownloadImage(ref: RefObject<HTMLDivElement>, title: string) {
    return (useCallback(() => {
        if (ref.current === null) {
            return
        }
        console.log(ref.current.parentElement)
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
                CreateToast('Gradient Image Downloading...')
            })
            .catch(() => {
                CreateToast('Download Unavailable')
            })

    }, [ref]))

}

export default useDownloadImage
