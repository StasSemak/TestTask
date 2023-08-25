import { Calendar, ClipboardList, PackageOpen, Pencil, Trash2 } from "lucide-react"
import Button from "../ui/Button"
import DeleteDialog from "./DeleteDialog"

const RequestCard = (request: ParcelRequest) => {
    const isOrder = request.requestType === 'order'

    const isDate = new Date(request.dateDispatch).getTime() !== new Date(0).getTime()

    return(
        <div className="request-card">
            <p className="text-xl font-bold type">{request.requestType}</p>
            <p className="text-2xl font-medium">{request.from} - {request.to}</p>
            <div className="flex gap-1.5 items-center">
                <Calendar className="h-6 w-6 mb-1 icon"/>
                <p className="text-lg font-medium">
                    {isDate ? new Date(request.dateDispatch).toLocaleDateString() : "Not specified"}
                </p>
            </div>
            {isOrder && 
                <>
                    <div className="flex gap-1.5 items-center">
                        <PackageOpen className="icon"/>
                        <p className="text-lg font-medium">{request.parcelType ? request.parcelType : "Not specified"}</p>
                    </div>
                    <div className="flex gap-1.5 items-center">
                        <ClipboardList className="icon"/>
                        <p className="font-medium">{request.description ? request.description : "Not specified"}</p>
                    </div>
                </>
            }
            <div className="flex justify-end gap-0.5 mt-2">
                <Button>
                    <Pencil className="h-4 w-4"/>
                </Button>
                {/* <Button>
                    <Trash2 className="h-4 w-4"/>
                </Button> */}
                <DeleteDialog requestId={request.id}/>
            </div>
        </div>
    )
}

export default RequestCard