import { Container, Flex, Link } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../public/image/Logo.png';


export function Header(){
  return(
    <Container maxW='1250px'>
      <Flex w='100%' h={50} display='flex' justifyContent='center' alignItems='center' py='8' >
        <Link href="/">
           <Image src={Logo} height="30" width="150" alt='logo'/>
        </Link> 
      </Flex>
    </Container>
  )
}