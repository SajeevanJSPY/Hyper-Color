// Heading Component

interface headingProps {
    title: string,
    superTitle: string,
    content: string
}

function Heading({ title, superTitle, content }: headingProps) {
    return (
        <header className="container mx-auto w-full mt-32 py-8 flex flex-col items-center">
            <div className="flex flex-col gap-8 items-center justify-center w-[75%] max-w-2xl">

                <div className="font-serif bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-center">
                    <div className="text-xl text-transparent font-semibold tracking-tight">{ superTitle }</div>
                    <div className="text-transparent uppercase font-bold text-5xl lg:text-6xl font-Roboto">{ title }</div>
                </div>

                <div className="text-xl text-center font-semibold font-Ubuntu">
                    { content }
                </div>

            </div>
        </header>
    )
}

export default Heading
