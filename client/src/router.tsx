import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import NotExists from "./pages/NorExists/NotExists";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <NotExists/>
    },
    {
        path: "/player/:id",
        element: <PlayerPage/>
    }, 
    {
        path: "team/:id",
        element: <TeamPage/>
    }
])

export default function Router () {
    return (
        <> 
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}