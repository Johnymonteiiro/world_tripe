import type { AppProps } from 'next/app';
import {  ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/styles.scss';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
//to prevent a pre-rerender and hidratation on the server:
  const [showCild, setShowChild] = useState(false);

  useEffect(()=>{

    setShowChild(true)

  },[])

  if(!showCild){
    return null;
  }

  return (
    <>
      <ChakraProvider theme={theme} >
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
