import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import Notfound from "../pages/error";
import MainLayouts from "../layouts/main";



const routes = createBrowserRouter([
    {
        path:"/",
        element : <MainLayouts/>,
        children: [
            {
                index : true,
                element : <Home/>
            },

            {
                path:"explore",
                element :<Explore/>
            },
            {
                path:"notifications",
                element :<Notifications/>
            },
            {
                path:"*",
                element :<Notfound/>
            },
        ]
    },
   
   
])


export default routes;