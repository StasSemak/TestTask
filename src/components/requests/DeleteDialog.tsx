import { AlertDialog, Flex } from "@radix-ui/themes"
import Button, { buttonVariants } from "../ui/Button"
import { Trash2 } from "lucide-react"
import { deleteRequest } from "../../lib/requests"
import { useAppDispatch } from "../../store/hooks"
import { deleteItem } from "../../store/requestsSlice"
import { toast } from "react-hot-toast"

const DeleteDialog = ({requestId}: {requestId:string}) => {
    const dispatch = useAppDispatch()

    const deleteHandler = () => {
        deleteRequest(requestId)
        dispatch(deleteItem(requestId))
        toast.success("Request deleted!")
    }

    return(
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button className={buttonVariants({variant: 'ghost', size: 'sm'})}>
                    <Trash2 className="h-4 w-4"/>
                </Button>
            </AlertDialog.Trigger>

            <AlertDialog.Content className="delete-alert">
                <AlertDialog.Title>
                    Delete request
                </AlertDialog.Title>
                <AlertDialog.Description>
                    Are you sure? Your request will be deleted without ability to restore 
                </AlertDialog.Description>

                <Flex gap="3" mt="5" justify="end">
                    <AlertDialog.Cancel>
                        <Button className={buttonVariants({variant: 'ghost'})}>
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button onClick={deleteHandler}>
                            Delete
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}

export default DeleteDialog