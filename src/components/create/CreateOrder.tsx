import { ChangeEvent, FormEvent, useState } from "react"
import Button from "../ui/Button"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const CreateOrder = () => {
    const [request, setRequest] = useState<OrderRequest>({
        from: '', 
        to: '', 
        type: '',
        dateCreated: new Date(0),
        dateDispatch: new Date(0),
        description: ''
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setRequest({...request, [e.target.name]: e.target.value})
    }

    const createOrder = (order: OrderRequest) => {
        if(order.from.length === 0) throw new Error("Location can't be empty!")
        if(order.to.length === 0) throw new Error("Destination can't be empty!")
        if(order.dateDispatch) {
            if(new Date(order.dateDispatch).getTime() < Date.now()) 
                throw new Error("Date can't be previous!")
        }

        order.dateCreated = new Date(Date.now())

        const existingOrdersLS = localStorage.getItem("orders")
        let existingOrders: OrderRequest[] = [];
        if(existingOrdersLS) existingOrders = JSON.parse(existingOrdersLS) as OrderRequest[]

        localStorage.setItem("orders", JSON.stringify([...existingOrders, order]))
    }

    const submithandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            createOrder(request);
            toast.success("Order successfully added!")
            navigate(0)
        }
        catch(error) {
            if(error instanceof Error) toast.error(error.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    
    return(
        <div className="form">
            <h2>Create order</h2>
            <form className="flex flex-col gap-3 mt-6 w-full" onSubmit={submithandler}>
                <div className="form-item">
                    <label>Parcel location (required)</label>
                    <input 
                        placeholder="City where parcel is" 
                        className="input"
                        name="from"
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-item">
                    <label>Parcel destination (required)</label>
                    <input 
                        placeholder="City where you need your parcel to be" 
                        className="input"
                        name="to"
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-item">
                    <label>Content type</label>
                    <input 
                        placeholder="What's inside the package" 
                        className="input"
                        name="type"
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-item">
                    <label>Date of dispatch</label>    
                    <input 
                        placeholder="Date of dispatch" 
                        className="input"
                        type="date"
                        name="dateDispatch"
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-item">
                    <label>Description</label>
                    <textarea
                        placeholder="Parcel details"  
                        name="description"
                        onChange={changeHandler}
                    />
                </div>
                <Button 
                    className="self-end mt-2" 
                    type="submit"
                    isLoading={isLoading}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default CreateOrder