import { createBrowserRouter } from "react-router-dom";
import Public from "../components/Public";
import DashLayout from "../components/DashLayout";
import Welcome from "../features/auth/Welcome";
import NotesLists from "../features/notes/NotesLists";
import UsersLists from "../features/users/UsersLists";
import Login from "../features/auth/Login";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import EditUser from "../features/users/EditUser";
import NewUserForm from "../features/users/NewUserForm";
import EditNote from "../features/notes/EditNote";
import NewNote from "../features/notes/NewNote";
import Prefetch from "../features/auth/Prefetch";
import PersistLogin from "../features/auth/PersistLogin";

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
                element: <PersistLogin />,
                children:[
                    {
                        element: <Prefetch />,
                        children:[
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
                                            },
                                            {
                                                path: '/dash/notes/:id',
                                                element: <EditNote />
                                            },
                                            {
                                                path: '/dash/notes/new',
                                                element: <NewNote />
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
                                            },
                                            {
                                                path: '/dash/users/:id',
                                                element: <EditUser />
                                            },
                                            {
                                                path: '/dash/users/new',
                                                element: <NewUserForm />
                                            }
                                        ]
                                    }
                                ]
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