import React, { useState } from 'react'
import {Container,Stack, Input,InputLeftElement, InputGroup,Button, InputRightElement} from "@chakra-ui/react"
import {AiOutlineMail} from "react-icons/ai" 
import {RiLockPasswordLine} from "react-icons/ri"
import axios from 'axios'

export const Register = () => {
    const [password,setPassword] =useState(true)
    const [email,setEmail] =useState("")
    const [pass,setpass]=useState("")

    const handleRegister=()=>{
        axios.post("http://localhost:4000/register",{email,password:pass}).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
   <Container w={["full", "md"]} p={[8,10]} mt={[200,"10hv"]} mx={[500,"10hv"]} border={["none", "1px"]} borderColor={["","gray.300"]} borderRadius={50}>
    <Stack>
        <Stack mx={["auto"]}>
            <h1>Create an account</h1>
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
        <Input type={password?"password":"text"} placeholder="Password" onChange={(e)=>setpass(e.target.value)}/>
        <InputRightElement>
      <Button onClick={()=>{setPassword(!password)}}>Show</Button>
    </InputRightElement>
        <buttton onClick={()=>{setPassword(!password)}}></buttton>
    </InputGroup>
        <Button onClick={handleRegister}>Submit</Button>
        <InputGroup>
            <h1>Have an account <a href='/Login'>SignIn</a></h1>
        </InputGroup>
    </Stack>
   </Container>
  )
}
