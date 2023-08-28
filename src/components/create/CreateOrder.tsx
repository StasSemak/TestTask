import { useState } from "react"
import Button from "../ui/Button"
import { toast } from "react-hot-toast"
import { createRequest } from "../../lib/requests"
import { useForm } from "react-hook-form"

const CreateOrder = () => {
    const { register, handleSubmit, reset } = useForm<ParcelRequest>({
        defaultValues: {
            requestType: 'order',
            dateCreated: new Date(0),
            dateDispatch: new Date(0)
        }
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSubmit = (data: ParcelRequest) => {
        setIsLoading(true)

        try {
            createRequest(data);
            toast.success("Order successfully added!")
            reset()
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
            <form className="flex flex-col gap-3 mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <label>Parcel location (required)</label>
                    <input 
                        placeholder="City where parcel is" 
                        className="input"
                        {...register("from")}
                    />
                </div>
                <div className="form-item">
                    <label>Parcel destination (required)</label>
                    <input 
                        placeholder="City where you need your parcel to be" 
                        className="input"
                        {...register("to")}
                    />
                </div>
                <div className="form-item">
                    <label>Content type</label>
                    <input 
                        placeholder="What's inside the package" 
                        className="input"
                        {...register("parcelType")}
                    />
                </div>
                <div className="form-item">
                    <label>Date of dispatch</label>    
                    <input 
                        placeholder="Date of dispatch" 
                        className="input"
                        type="date"
                        {...register("dateDispatch")}
                    />
                </div>
                <div className="form-item">
                    <label>Description</label>
                    <textarea
                        placeholder="Parcel details"  
                        {...register("description")}
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