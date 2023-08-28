import { useState } from "react";
import Button from "../ui/Button";
import toast from "react-hot-toast";
import { createRequest } from "../../lib/requests";
import { useForm } from "react-hook-form";


const CreateDeliver = () => {
    const { register, handleSubmit, reset } = useForm<ParcelRequest>({
        defaultValues: {
            requestType: 'deliver',
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
            <h2>Create deliver</h2>
            <form className="flex flex-col gap-3 mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <label>Deliver location (required)</label>
                    <input 
                        placeholder="City where parcel is" 
                        className="input"
                        {...register('from')}
                    />
                </div>
                <div className="form-item">
                    <label>Deliver destination (required)</label>
                    <input 
                        placeholder="City where you can transport parcel" 
                        className="input"
                        {...register('to')}
                    />
                </div>
                <div className="form-item">
                    <label>Date of dispatch</label>    
                    <input 
                        placeholder="Date of dispatch" 
                        className="input"
                        type="date"
                        {...register('dateDispatch')}
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

export default CreateDeliver