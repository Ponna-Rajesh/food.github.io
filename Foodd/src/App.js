import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Pages/RestaurantMenu/RestaurantMenu";

 
const AppLayOut = () => {
    return (
        <div className="app">
           <Header />
           <Outlet />
        <footer>
            <Footer />
        </footer>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)       