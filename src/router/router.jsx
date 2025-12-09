import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../pages/Rootlayout'
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
const router=createBrowserRouter([
    {path:'/',element:<RootLayout/>, children:[
    {path:'/',index:true,element:<Shop/>},
    {path:'/cart',element:<Cart/>}
    ]}
])
export default router