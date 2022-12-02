import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PockemonInfo, PockemonsPack} from "../../types";

const pockemonsPackSlice = createSlice({
    name: 'pockemon',
    initialState: {
        pockemonsPack: [] as PockemonsPack[],
        pockemonsInfo: [] as PockemonInfo[],
    },
    reducers: {
        loadAllPockemons: (state, action: PayloadAction<PockemonsPack[]>) => {
            state.pockemonsPack.push(...action.payload)
        },
        loadPockemonsInfo: (state, action: PayloadAction<PockemonInfo>) => {
            state.pockemonsInfo.push(action.payload)
        }
    }
})

export const { loadAllPockemons, loadPockemonsInfo } = pockemonsPackSlice.actions

export const pockemonsReducer = pockemonsPackSlice.reducer