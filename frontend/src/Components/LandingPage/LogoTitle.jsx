import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import logo from "../../Images/ICFDR.png"
import { Context } from '../../Context'

const LogoTitle = () => {
  let {theme} = useContext(Context)
  return (
    <Box color={"black"} bgcolor={"white"} display={"flex"} width={"100%"} alignItems={"center"} gap={"10px"} >
        <Box height={["50px","100px"]}>
        <img src={logo} alt="logo" height={"100%"} />
        </Box>
        <Box width={"100%"} ml={".75%"} >
        <Typography variant={"h4"} fontSize={["1rem","1.5rem","2rem","2.5rem"]} fontWeight={700}>
        Indian Centre for Development and Rights
        </Typography>
         </Box>
        </Box>
  )
}

export default LogoTitle