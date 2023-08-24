interface BaseRequest {
    from: string
    to: string
    dateCreated: Date
    dateDispatch?: Date
}

interface OrderRequest extends BaseRequest {
    type?: string
    description?: string
}

interface DeliverRequest extends BaseRequest {}