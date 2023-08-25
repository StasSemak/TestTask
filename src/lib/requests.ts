export const createRequest = (request: ParcelRequest) => {
    if(request.from.length === 0) throw new Error("Location can't be empty!")
    if(request.to.length === 0) throw new Error("Destination can't be empty!")
    if(request.dateDispatch) {
        if(new Date(request.dateDispatch).getTime() < Date.now()) 
                throw new Error("Date can't be previous!")
    }

    request.dateCreated = new Date(Date.now())

    const existingRequestsLS = localStorage.getItem("requests")
    let existingRequests: ParcelRequest[] = [];
    if(existingRequestsLS) existingRequests = JSON.parse(existingRequestsLS) as ParcelRequest[]

    localStorage.setItem("requests", JSON.stringify([...existingRequests, request]))
}