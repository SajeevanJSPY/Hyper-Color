// Footer Component
import { star } from "../assests/IconsAssests"

function Footer() {
    const favourite =
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative top-1 animate-forHeart" fill="red" viewBox="0 0 24 24" stroke="red" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>

    return (
        <footer className="w-full h-20 bg-[rgba(0,0,60,0.9)] tracking-wider font-semibold text-white mt-28 flex flex-col justify-center items-center text-xl">
            <div className="flex">Created with {favourite} and ReactJS </div>
            <a className="flex group hover:text-white/70" href="https://github.com/jordihales/hypercolor">Credits to jordihales { star }</a>
        </footer>
    )
}

export default Footer   