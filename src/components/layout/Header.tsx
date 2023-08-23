const Header = () => {
    return(
        <header className="h-20 bg-indigo-600 flex items-center justify-between px-10 sm:px-20 lg:px-52">
            <a href="/">
                <h1 className="text-4xl text-indigo-50 font-bold">
                    Deli<span className="text-amber-300">Very</span>Fast
                </h1>
            </a>
            <nav className="flex gap-4 lg:gap-8">
                <a href="/create">Create</a>
                <a href="/requests">Requests</a>
            </nav>
        </header>
    )
}

export default Header