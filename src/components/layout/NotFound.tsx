import { Link } from "react-router-dom"
import { buttonVariants } from "../ui/Button"

const NotFound = () => {
    return(
        <div className="not-found">
            <p>404</p>
            <h2>This page doesn't exist</h2>
            <Link to="/" className={buttonVariants()}>
                Go home
            </Link>
        </div>
    )
}

export default NotFound