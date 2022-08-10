import { Flex } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContinentProps } from '../../types/types';
import { SlideItems } from './slideItems';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


export function SlideContinents({ continents }: ContinentProps) {

  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{width: '100%', flex: '1'}}
    > 

      {continents.map(continent => (
        <SwiperSlide className="slide" key={continent.slug}>
          <SlideItems continentName={continent.name} text={continent.title} image={continent.image} slug={continent.slug}/>
        </SwiperSlide>
      ))}

    </Swiper>
  </Flex>
  );
}
