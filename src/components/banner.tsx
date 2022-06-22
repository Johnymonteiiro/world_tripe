import { Flex,Text, Image, Box } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('image/Background.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        alignItems="center"
        justify={["center", "space-between"]}
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box as="div">
          <Text
            fontSize={["xl", "2xl", "2xl", "3xl", "4xl"]}
            fontWeight="500"
            color="white.900"
          >
            5 Continentes,
            <br />
            infinitas possibilidades
          </Text>
          <Text
            fontSize={["0.8rem", "lg"]}
            maxW={["100%", "100%", "100%", "550px"]}
            mt="5"
            color="gray.400"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          src="image/Airplane.png"
          transform="translateY(48px)"
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          ml="8"
          alt="airplane"
        />
      </Flex>
    </Flex>
  );
}
