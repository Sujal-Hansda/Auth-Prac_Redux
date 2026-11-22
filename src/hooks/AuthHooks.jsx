  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router"
  import { toast } from "react-toastify";
  import { addUser } from "../features/authSlice";


  export const useAuth = ()=>
  {

    const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUser"))||[])
    let dispatch = useDispatch()
    const navigate = useNavigate();
    let {register,handleSubmit,formState:{errors},reset} = useForm();

    let registerHandleSubmit = (data)=>
      {
        let arr = [...registeredUser,data]
        setRegisteredUser(arr)
        toast.success("user registered")
        localStorage.setItem("registeredUser",JSON.stringify(arr))
        reset()
      }
      
      let loginhandleSubmit = (data)=>
      {
        console.log(registeredUser);
        
        let user = registeredUser.find((val)=>
        {
          return val.email === data.email && val.password === data.password
        })
        if (!user)
        {
          toast.error("Invalid credentials")
          return 
        }
        dispatch(addUser(user))
        localStorage.setItem("loggedinUser",JSON.stringify(user));
        toast.success("user logged in")
        reset();      
      }


    return {
      navigate,
      register,
      handleSubmit,
      errors,
      reset,
      registerHandleSubmit,
      loginhandleSubmit
    }
  }