import {  Container  } from "@chakra-ui/react";
import { SlideContinents } from "../components/slide";
import { TravelTypes } from "../components/travelTypes";

export function Main (){

  return(
    <Container maxW="1250px" m="0 auto" w='100%' pb={20}>
     <TravelTypes/>
     <SlideContinents />
    </Container>
  
  )
}