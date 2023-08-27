import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: ParcelRequest[] = []

const requestsSlice = createSlice({
    name: 'requests',
    initialState: initialState,
    reducers: {
        setItems: (state ,action: PayloadAction<ParcelRequest[]>) => {
            return action.payload
        },
        updateItem: (state, action: PayloadAction<ParcelRequest>) => {
            const request = action.payload
            const itemIndex = state.findIndex((x) => x.id === request.id)

            if(itemIndex !== -1) state[itemIndex] = request
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            return state.filter(x => x.id !== action.payload)
        },
    },
})

export const { setItems, updateItem, deleteItem } = requestsSlice.actions
export default requestsSlice.reducer