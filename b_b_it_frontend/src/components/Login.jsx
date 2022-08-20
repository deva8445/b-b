import React, { useState } from 'react'
import {Container,Stack,Heading, Input,InputLeftElement, InputGroup,Button, InputRightElement, HStack} from "@chakra-ui/react"
import {AiOutlineMail} from "react-icons/ai" 
import {RiLockPasswordLine} from "react-icons/ri"
import axios from "axios"
export const Login = () => {
    const [password,setPassword] =useState(true)
    const [email,setEmail] =useState("")
    const [pass,setpass]=useState("")
    const handleSubmit=()=>{
        axios.post("http://localhost:4000/login",{email,password:pass}).then((res)=>{
            console.log(res.data.Token)
            localStorage.setItem("token",JSON.stringify(res.data.Token))
        }).catch((err)=>{
            console.log(err.message)
        })
    }
  return (
   <Container textAlign="center"   w={["full", "md"]} p={[8,10]} mt={[200,"10hv"]} mx={[500,"10hv"]} border={["none", "1px"]} borderColor={["","gray.300"]} borderRadius={50}>
    <Stack>
        <Stack mx={["auto"]}>
            <Heading fontSize="large">Welcome Back</Heading>
            <h3>SignIn to continue</h3>
        </Stack>
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='black.300'
      fontSize='1.2em'
      children={<AiOutlineMail/>}
    />
    <Input placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} />
    
  </InputGroup>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='black.300'
      fontSize='1.2em'
      children={<RiLockPasswordLine />}
    />
        <Input type={password?"password":"text"} onChange={(e)=>setpass(e.target.value)} placeholder="Password"/>
        <InputRightElement>
      <Button onClick={()=>{setPassword(!password)}}>Show</Button>
    </InputRightElement>
    </InputGroup>
    <Button onClick={handleSubmit}>Submit</Button>
        <InputGroup>
            <h1>Don't have an account <a href="/Register">SignUp</a></h1>
            
        </InputGroup>
    </Stack>
   </Container>
  )
}
