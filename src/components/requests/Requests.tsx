import { useEffect, useState } from "react"
import { getRequests } from "../../lib/requests"
import RequestCard from "./RequestCard"
import { DropdownMenu } from "@radix-ui/themes"
import Button from "../ui/Button"

const Requests = () => {
    const [requests, setRequests] = useState<ParcelRequest[]>([])
    const [sortBy, setSortBy] = useState<SortRequestsBy>("creation")

    useEffect(() => {
        const reqs = getRequests(sortBy)
        if(reqs) setRequests(reqs)
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
            <div className="requests-container">
                {requests.map((item, index) => {
                    const { requestType, ...props } = item

                    return <RequestCard key={index} requestType={requestType} {...props}/>
                })}
            </div>
        </div>
    )
}

export default Requests