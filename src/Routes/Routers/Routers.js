import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import EditReview from "../../Pages/MyReviews/EditReview";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";


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
                element:<PrivetRoutes><MyReviews></MyReviews></PrivetRoutes>
            },   
            {
                path:'/addservice',
                element:<AddService></AddService>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },   
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },   
            {
                path:'/serviceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://photography-studio-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/editreview/:id',
                element:<EditReview></EditReview>
            }  
            
        ]
    }
])