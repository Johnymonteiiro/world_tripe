import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

import { SlideItems } from "./slideItems";
import { Box, ContainerProps, Flex, Heading, Text } from "@chakra-ui/react";
import { continentsTypes } from "../../types/types";
import { useFetch } from "../hook/useFetching";
import { useState } from "react";
import { GetStaticProps } from "next";
import api from "../../service/api";


export function SlideContinents ({continents}:continentsTypes){

  console.log(continents)
  
  // const { data } = useFetch<continentsTypes[]>(`continents`)
  // const [index, setIndex] = useState('1')
 
  // if(!data){
  //   <p>Loading....</p>
  // }
  
  
  return(
    <Flex display="flex" direction="column" align="center" mt="126px">
      <Box mb="96px" textAlign="center">
        <hr  className="line" />
        <Heading fontSize={["xl", "2xl","3xl", "4xl"]} color="gray.500" alignItems="center" fontWeight="500">
          Vamos nessa?
        </Heading>
        <Text fontSize={["xl", "2xl","3xl","4xl"]} color="gray.500" alignItems="center" fontWeight="500">
          Então escolha seu continente
        </Text>
      </Box>
       

    <Swiper
     className="mySwiper"
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      // onSlideChange={(swiper) => setIndex(String(swiper.activeIndex + 1))}
      modules={[EffectFade, Navigation, Pagination]}
    >

    {/* {data?.map((continent) =>(
      <SwiperSlide className="slide" key={continent.id}>
         <SlideItems 
         id={index} 
         text={continent.title} 
         image={continent.banner} 
         continentName={continent.name}/>
      </SwiperSlide>
    ))} */}
    </Swiper>
  </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  
  const { data } = await api.get<ContainerProps[]>('continents');

  const continents = data

  return{
    props:{
      continents
    },
    revalidate:60,
  }
} 