import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import Footer from "../components/NavBar/Footer";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";

//named export
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {index:true, element: <Home></Home>},
        {path: "/products", element: <Products></Products> },
        {path: "/wishlist", element: <Wishlist></Wishlist> },
        {path: "/products", element: <Footer></Footer> },
    ]
  }
]);
