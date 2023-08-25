import { useEffect, useState } from "react"
import { getRequests } from "../../lib/requests"
import RequestCard from "./RequestCard"

const Requests = () => {
    const [requests, setRequests] = useState<ParcelRequest[]>([])

    useEffect(() => {
        const reqs = getRequests()
        if(reqs) setRequests(reqs)
    }, [])

    return(
        <div className="requests">
            <h2>Your requests</h2>
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