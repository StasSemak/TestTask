import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className="h-20 bg-indigo-600 flex items-center justify-between px-10 sm:px-20 lg:px-52">
            <Link to="/">
                <h1 className="text-4xl text-indigo-50 font-bold">
                    Deli<span className="text-amber-300">Very</span>Fast
                </h1>
            </Link>
            <nav className="flex gap-4 lg:gap-8">
                <Link to="/create">Create</Link>
                <Link to="/requests">Requests</Link>
            </nav>
        </header>
    )
}

export default Header