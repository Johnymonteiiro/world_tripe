import { Flex, Box, Heading, Text,Link} from "@chakra-ui/react";
import { useEffect } from "react";
import { continentsTypes } from "../../types/types";

interface SlideItemProps {
  id:string,
  text: string;
  image: string;
  continentName: string;
}

export function SlideItems({ continentName, text, image,id}: SlideItemProps) {

  return (
    <Flex
      w="100%"
      h={["100%", "450px", "100%"]}
      bgImage={`url(${image})`}
      bgPosition={["100% 20%", "100% 20%", "100% 50%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        bgGradient=" linear-gradient(0deg, rgba(28, 20, 1, 0.75), rgba(28, 20, 1, 0.65))"
        w="100%"
        color="gray.400"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center">
          <Link href={`/continent`} style={{ textDecoration: "none" }}>
           <button>
              <Heading
                fontSize={["3xl", "4xl", "5xl"]}
                color="white.900"
                fontWeight="700"
              >
                {continentName}
              </Heading>
              <Text mt="16px" fontSize={["md", "lg", "xl"]} fontWeight="600">
                {text}
              </Text>
           </button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
