import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'
import { AboutPage } from '../pages/AboutPage'
import ShopPage from '../pages/ShopPage'
import ProductDetailCard from '../components/productDetailCard'

const AppRoute = () => {
  let dispatch = useDispatch();
  const hydrateUser = ()=>
  {
    let loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"))
    if (!loggedinUser)
    {
      toast.error("unauthorized user")
      return
    }
    dispatch(addUser(loggedinUser))
  }
  useEffect(()=>
  {
    hydrateUser();
  },[])
  let router = createBrowserRouter([
    {
    path:"/",
    element:<PublicProtected/>,
    children:[{
      path:"",
      element:<AuthLayout/>,
      children:[
      {
        path:"",
        element:<LoginPage/>
      },
      {
        path:"register",
        element:<RegisterPage/>
      }
    ]
    }]
    },
    {
      path:"/main",
      element:<MainProtected/>,
      children:[{
        path:"",
        element:<MainLayout/>,
        children:[
        {
          path:"",
          element:<HomePage/>
        },
        {
          path:"about",
          element:<AboutPage/>
        },
        {
          path:"shop",
          element:<ShopPage/>
        },
        {
          path:"product/:id",
          element:<ProductDetailCard/>
        }

      ]
      }]
    }
])  
  
  
  return <RouterProvider router={router}/>
}

export default AppRoute