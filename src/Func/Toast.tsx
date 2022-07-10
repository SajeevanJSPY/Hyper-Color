// Toast Function
const toastContainer = document.getElementById('toastContainer') as HTMLElement

function CreateToast(content: string) {
    const divElement = document.createElement('div')
    divElement.classList.add('w-full', 'h-12', 'bg-blue-600', 'text-white', 'flex', 'items-center', 'justify-center', 'rounded-lg', 'text-xl')
    divElement.innerHTML = content
    toastContainer.insertAdjacentElement('beforeend', divElement)
    setTimeout(() => {
        divElement.remove()
    }, 2000)
}

export default CreateToast