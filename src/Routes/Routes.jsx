import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SIgnup/Signup";
import BookService from "../Pages/BookService/BookService";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'book/:id',
                element: <PrivateRoute>
                    <BookService />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-beryl-seven.vercel.app/services/${params.id}`)
            },
            {
                path: 'booking',
                element: <PrivateRoute>
                    <Booking></Booking>
                </PrivateRoute>
            }
        ]
    },
]);


export default router;