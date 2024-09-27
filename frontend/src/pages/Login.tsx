import { Box, Button, Typography } from '@mui/material';
import penguin from "../assets/penguin.jpg";
import CustomizedInput from '../components/shared/CustomizedInput';
import { IoIosLogIn } from 'react-icons/io';
import React from 'react';
import { useAuth } from '../context/Authcontext';
import toast from 'react-hot-toast';

const Login = () => {

  const auth = useAuth();

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    // the type of data formData.get() returns a value of type FormDataEntryValue | null
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("Please provide both email and password", { id : "login"});
      return ;
    }

    try {
      toast.loading("Signing Innnn", {id : "login"})
      await auth?.login(email,password);
      toast.success("Logged In Successfully", {id : "login"})
    } catch (error) {
      console.log("Error while Logging Inn",error)
      toast.error("Login in Failed",{ id : "login"})
    }
  }

  return (
    <Box width={'100%'} height={'100%'} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{ md:"flex" , sm : "none" , xs : "none"}}>
        <img src={penguin} alt='AM - E' style={{width: "400px"}}/>
      </Box>
      <Box display={"flex"} flex={{ xs : 1 , md : 0.5}} 
      justifyContent={"center"} alignItems={"center"} padding={2} ml={"auto"} mt={16}>
        <form onSubmit={handleSubmit}
        style={{
          margin :"auto",
          padding : "30px",
          boxShadow: "10px 10px 20px #000",
          borderRadius: "10px",
          border: "none"
        }}
        >
          <Box sx={{display:"flex" , flexDirection:"column", justifyContent: "center"}}>
            <Typography variant='h4' textAlign="center" padding={2} fontWeight={600} >
              Login
            </Typography>
            <CustomizedInput name="email" type='email' label='Email' />
            <CustomizedInput name="password" type='password' label='Password' />
            <Button type='submit' 
            endIcon={<IoIosLogIn/>}
            >
              Login
            </Button>
          </Box>
        </form>

      </Box>

    </Box>
  )
}

export default Login