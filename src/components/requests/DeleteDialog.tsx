import { AlertDialog, Flex } from "@radix-ui/themes"
import Button from "../ui/Button"
import { Trash2 } from "lucide-react"
import { deleteRequest } from "../../lib/requests"
import { useNavigate } from "react-router-dom"

const DeleteDialog = ({requestId}: {requestId:string}) => {
    const navigate = useNavigate()

    const deleteHandler = () => {
        deleteRequest(requestId)
        navigate(0)
    }

    return(
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button>
                    <Trash2 className="h-4 w-4"/>
                </Button>
            </AlertDialog.Trigger>

            <AlertDialog.Content style={{maxWidth: 450}}>
                <AlertDialog.Title>
                    Delete request
                </AlertDialog.Title>
                <AlertDialog.Description>
                    Are you sure? Your request will be deleted without ability to restore 
                </AlertDialog.Description>

                <Flex gap="3" mt="5" justify="end">
                    <AlertDialog.Cancel>
                        <Button className="btn-cancel">
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