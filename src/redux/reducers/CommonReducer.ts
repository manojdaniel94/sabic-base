import { createSlice } from '@reduxjs/toolkit'
import { HOME, HOME_ROUTE, initialSelectedData } from '../../constant/constants'

const CommonSlice = createSlice({
    name: "Common",
    initialState: {
        regions: [],
        loadingRegions: false,
    },
    reducers: {
        getRegions: (state, action) => {
            state.loadingRegions = true
        },
        getRegionSuccess: (state, action) => {
            state.regions = action.payload
            state.loadingRegions = false
        },
        getRegionsFailure: (state, action) => {
            state.loadingRegions = false
        },
    }
})

export const {
    getRegions,
    getRegionSuccess,
    getRegionsFailure,
} = CommonSlice.actions

export default CommonSlice.reducer