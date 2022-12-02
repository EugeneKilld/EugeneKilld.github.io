import React, { useEffect } from "react"
import { Header, Content, Footer } from "../../../components";
import { ScrollToTopOnPageReload } from "../../helpers/pageNavigationHelper";
import { loadAllPockemons } from "../../store/pockemons/pockemonsSlice";
import { getAllPockemons } from "../../Api/Pockemon";
import { PockemonsPack } from "../../types";
import { useAppDispatch } from "../../hooks/hooks";

export const Main = () => {
    const dispatch = useAppDispatch()

    const allPockemonsResolver = (response: PockemonsPack[]) => {
        dispatch(loadAllPockemons(response))
    }

    useEffect(() => {
        getAllPockemons(allPockemonsResolver)
    }, [])

    return (
        <>
            <Header />
            <Content />
            <Footer />
            <ScrollToTopOnPageReload />
        </>
    )
}