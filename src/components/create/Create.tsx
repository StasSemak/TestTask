import { PackageOpen, Truck } from "lucide-react"
import { Link } from "react-router-dom"

const Create = () => {
    return(
        <div className="create">
            <h2>Create request to order delivery or to deliver</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mt-10">
                <Link to="order">
                    <div className="nav-item-create">
                        <h3>Order</h3>
                        <PackageOpen className="h-8 w-8 icon"/>
                    </div>   
                </Link>
                <Link to="deliver">
                    <div className="nav-item-create">
                        <h3>Deliver</h3>
                        <Truck className="h-8 w-8 icon"/>
                    </div>  
                </Link>
            </div>
        </div>
    )
}

export default Create