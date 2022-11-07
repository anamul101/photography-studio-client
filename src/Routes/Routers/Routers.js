import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services from "../../Pages/Services/Services";


const { createBrowserRouter } = require("react-router-dom");
 
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/services',
                element:<Services></Services>
            },   
            {
                path:'/reviews',
                element:<MyReviews></MyReviews>
            },   
            {
                path:'/addservice',
                element:<AddService></AddService>
            }   
            
        ]
    }
])