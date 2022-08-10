import { Flex, Heading } from "@chakra-ui/react";
import { ContinentsTypes } from "../../types/types";

export default function ContinentBanner({ continent }: ContinentsTypes) {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      bgImage={`url('${continent.banner_image}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
    >
      <Flex
        w="100%"
        h="100%"
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        justify={["center", "center", "flex-start"]}
        bgGradient=" linear-gradient(0deg, rgba(10, 0, 5, 0.55), rgba(10, 0, 5, 0.55))"
      >
        <Heading
          textAlign={["center", "left"]}
          fontSize={["1.75rem", "5xl"]}
          color="gray.100"
          fontWeight="500"
        >
          {continent.title}
        </Heading>
      </Flex>
    </Flex>
  );
}