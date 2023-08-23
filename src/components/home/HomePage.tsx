const HomePage = () => {
    return(
        <div className="flex flex-col gap-16 sm:gap-24 mt-10">
            <div className="home-desc">
                <h2>Best parcel transportation community</h2>
                <p>Make your request and other user will deliver your goods as fast as possible</p>
                <p>Maybe, you'll be this person for someone?</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
                <a href="/create">
                    <div className="nav-item">
                        <h3>Create</h3>
                        <p>Create new order or delivery request</p>
                    </div>
                </a>
                <a href="/requests">
                    <div className="nav-item">
                        <h3>Requests</h3>
                        <p>Explore and manage your requests</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HomePage