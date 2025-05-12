import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return <>
        <header><h1>React Web App</h1></header>
        <main>
            <Outlet />
        </main>
        <footer>----Footer-----</footer>
    </>
}

export default DefaultLayout