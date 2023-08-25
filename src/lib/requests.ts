import { nanoid } from "nanoid"

export const createRequest = (request: ParcelRequest) => {
    if(request.from.length === 0) throw new Error("Location can't be empty!")
    if(request.to.length === 0) throw new Error("Destination can't be empty!")
    if(new Date(request.dateDispatch).getTime() !== new Date(0).getTime())
        if(new Date(request.dateDispatch).getTime() < Date.now()) 
            throw new Error("Date can't be previous!")

    request.id = nanoid()
    request.dateCreated = new Date(Date.now())

    const existingRequestsLS = localStorage.getItem("requests")
    let existingRequests: ParcelRequest[] = [];
    if(existingRequestsLS) existingRequests = JSON.parse(existingRequestsLS) as ParcelRequest[]

    localStorage.setItem("requests", JSON.stringify([...existingRequests, request]))
}

export const getRequests = () => {
    const requests = localStorage.getItem("requests");
    if(requests) return JSON.parse(requests) as ParcelRequest[]
}

export const deleteRequest = (requestId: string) => {
    const requestsLS = localStorage.getItem("requests")
    if(!requestsLS) return;
    const requests = JSON.parse(requestsLS) as ParcelRequest[]

    const newRequests = requests.filter(x => x.id !== requestId)
    localStorage.setItem("requests", JSON.stringify(newRequests))
}