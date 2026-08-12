import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import NotExists from "./pages/NorExists/NotExists";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <NotExists/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "/player/:id",
                element: <PlayerPage/>
            }, 
            {
                path: "team/:id",
                element: <TeamPage/>
            }
        ]
    },
])

export default function Router () {
    return (
        <> 
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}