import { useEffect, useState } from "react"
import { getRequests } from "../../lib/requests"
import RequestCard from "./RequestCard"
import { DropdownMenu } from "@radix-ui/themes"
import Button, { buttonVariants } from "../ui/Button"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { RootState } from "../../store/store"
import { setItems } from "../../store/requestsSlice"

const Requests = () => {
    const [requests, setRequests] = useState<ParcelRequest[]>([])
    const [sortBy, setSortBy] = useState<SortRequestsBy>("creation")

    const dispatch = useAppDispatch()
    const itemsInRedux = useAppSelector((state: RootState) => state.requestsReducer)

    useEffect(() => {
        setRequests(itemsInRedux)
    }, [itemsInRedux])

    useEffect(() => {
        const reqs = getRequests(sortBy)
        if(reqs) {
            setRequests(reqs)
            dispatch(setItems(reqs))
        }
    }, [sortBy])

    return(
        <div className="requests">
            <div className="flex justify-between items-start">
                <h2>Your requests</h2>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button>
                            Sorted by {sortBy}
                        </Button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content align="center" color="iris">
                        <DropdownMenu.Item 
                            className="px-8"
                            onClick={() => setSortBy("creation")}
                        >
                            By date of creation
                        </DropdownMenu.Item>
                        <DropdownMenu.Item 
                            className="px-8"
                            onClick={() => setSortBy("dispatch")}
                        >
                            By date of dispatch
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
            {requests.length === 0 ? 
                <div className="h-[40vh] flex flex-col justify-center items-center gap-6">
                    <h3>You don't have requests</h3>
                    <Link to="/create" className={buttonVariants()}>
                        Create
                    </Link>
                </div>    
            : 
                <div className="requests-container">
                    {requests.map((item, index) => {
                        const { requestType, ...props } = item

                        return <RequestCard key={index} requestType={requestType} {...props}/>
                    })}
                </div>
            }
        </div>
    )
}

export default Requests