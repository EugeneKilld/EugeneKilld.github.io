import {useEffect, useState} from "react";
import {PockemonInfo, PockemonsPack} from "../types";
import {useAppSelector} from "./hooks";
import {getPockemonsInfo} from "../Api";


export const usePockemonInfo = (from: number, till: number) => {
    const [pockemonInfo, setPockemonInfo] = useState<PockemonInfo[]>([])
    const { pockemonsPack } = useAppSelector(state => state.pockemonsReducer)
    const amount = till - from + 1

    useEffect(() => {
        const pockemonInfoResolver = (response: PockemonInfo) => {
            setPockemonInfo([...pockemonInfo, response])
        }
        if (pockemonInfo.length < amount && pockemonsPack.length) {
            const pockemon = pockemonsPack.at(from + pockemonInfo.length) as PockemonsPack
            getPockemonsInfo(pockemon.url, pockemonInfoResolver)
        }
    },[pockemonInfo, pockemonsPack])

    return pockemonInfo
}