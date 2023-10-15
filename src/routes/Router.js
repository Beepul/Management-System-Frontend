import { createBrowserRouter } from "react-router-dom";
import Public from "../components/Public";
import DashLayout from "../components/DashLayout";
import Welcome from "../features/auth/Welcome";
import NotesLists from "../features/notes/NotesLists";
import UsersLists from "../features/users/UsersLists";
import Login from "../features/auth/Login";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Public />,
                index: true,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/dash',
                element: <DashLayout />,
                children:[
                    {
                        path: '/dash',
                        element: <Welcome />,
                        index: true
                    },
                    {
                        path: '/dash/notes',
                        children: [
                            {
                                path: '/dash/notes',
                                element: <NotesLists />,
                                index: true
                            }
                        ]
                    },
                    {
                        path: '/dash/users',
                        children: [
                            {
                                path: '/dash/users',
                                element: <UsersLists />,
                                index: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
    
]);

export default router;