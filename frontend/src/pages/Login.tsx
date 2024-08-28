import { Box, Button, Typography } from '@mui/material';
import hipengu from "../assets/hipengu.jpg";
import CustomizedInput from '../components/shared/CustomizedInput';
import { IoIosLogIn } from 'react-icons/io';
import React from 'react';

const Login = () => {

  const handleSubmit = (e : React.FormEvent<HTMLFormElement) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")
    const password = formData.get("password")
  }

  return (
    <Box width={'100%'} height={'100%'} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{ md:"flex" , sm : "none" , xs : "none"}}>
        <img src={hipengu} alt='AM - E' style={{width: "400px"}}/>
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