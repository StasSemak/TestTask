type BaseRequest = {
    from: string
    to: string
    dateCreated: Date
    dateDispatch?: Date 
}

type OrderRequest = BaseRequest & {
    requestType: 'order'
    parcelType?: string
    description?: string 
}

type DeliverRequest = BaseRequest & {
    requestType: 'deliver'
}

type ParcelRequest = OrderRequest | DeliverRequest