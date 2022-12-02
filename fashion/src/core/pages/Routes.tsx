import { Route, Routes} from "react-router-dom"
import { Main } from "./main/Main"
import React from "react"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}