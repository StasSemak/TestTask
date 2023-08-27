import { Dialog, Flex } from "@radix-ui/themes"
import Button, { buttonVariants } from "../ui/Button"
import { Pencil } from "lucide-react"
import { ChangeEvent, useState } from "react"
import { updateRequest } from "../../lib/requests"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const EditDialog = ({request}: {request:ParcelRequest}) => {
    const [newRequest, setNewRequest] = useState<ParcelRequest>(request);

    const changeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setNewRequest({...newRequest, [e.target.name]: e.target.value})
    }

    const isDate = new Date(request.dateDispatch).getTime() !== new Date(0).getTime()

    const navigate = useNavigate()

    const updateHandler = () => {
        try {
            updateRequest(newRequest)
            toast.success("Request saved!")
            navigate(0)
        }
        catch(error) {
            if(error instanceof Error) toast.error(error.message)
        }
    }

    return(
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className={buttonVariants({variant: 'ghost', size: 'sm'})}>
                    <Pencil className="h-4 w-4"/>
                </Button>
            </Dialog.Trigger>

            <Dialog.Content className="edit-dialog">
                <Dialog.Title mb="5">
                    Edit request
                </Dialog.Title>

                <Flex direction="column" gap="3">
                    <div className="form-item">
                        <label>Parcel location</label>
                        <input
                            placeholder="City where parcel is" 
                            className="input"
                            name="from"
                            defaultValue={request.from}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-item">
                        <label>Parcel destination</label>
                        <input 
                            placeholder="City where you need your parcel to be" 
                            className="input"
                            name="to"
                            defaultValue={request.to}
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
                            defaultValue={isDate ? new Date(request.dateDispatch).toISOString().substring(0, 10) : undefined}
                            onChange={changeHandler}
                        />
                    </div>
                    {request.requestType === "order" && 
                        <>
                            <div className="form-item">
                                <label>Content type</label>
                                <input 
                                    placeholder="What's inside the package" 
                                    className="input"
                                    name="parcelType"
                                    defaultValue={request.parcelType}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <textarea
                                    placeholder="Parcel details"  
                                    name="description"
                                    defaultValue={request.description}
                                    onChange={changeHandler}
                                />
                            </div>
                        </>
                    }
                </Flex>

                <Flex gap="3" mt="5" justify="end">
                    <Dialog.Close>
                        <Button className={buttonVariants({variant: 'ghost'})}>
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={updateHandler}>
                            Save
                        </Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default EditDialog