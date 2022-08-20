import React, { useEffect, useState } from 'react'
import {Container,Stack, Input,InputLeftElement, InputGroup,Button, InputRightElement} from "@chakra-ui/react"
import axios from "axios"

export const  Admin=()=> {
    const [data,setData]=useState(null)
    const getdata=()=>{
        axios.get("http://localhost:4000/users",{
            headers:{
                "Authorization":`Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        }).then((res)=>{
            console.log(res.data.user)
            setData(res.data.user)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    
    <Container>
            {data?.map((el,index)=>{
                return  <h2 key={index}>{el.email}</h2>

            })}
    </Container>
  )
}
