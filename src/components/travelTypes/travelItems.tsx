import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelItemsTypes {
  text:string,
  icon:string,
  alt:string
}

export function TravelItems ({text,icon,alt}: TravelItemsTypes){
  
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })

  return(
    <Flex direction={['row','column']} alignItems='center' justifyContent='center'>
     {isMobile ? <Image src={`image/${icon}.svg`} w='60px' h='70px' mb="6" alt={alt}/> : <Text fontSize="2xl" color='yellow.900' mr="4">&#9673;</Text> }
     <Text fontWeight="500" color="gray.500" fontSize={['md','xl','1xl',]} >{text}</Text>
    </Flex>
  )
}