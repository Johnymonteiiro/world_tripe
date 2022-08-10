import { Container, Heading } from "@chakra-ui/react";
import { SlideContinents } from "../components/slide";
import { TravelTypes } from "../components/travelTypes";
import { ContinentProps } from "../types/types";


export function Main({ continents }: ContinentProps) {
  return (
    <Container maxW="1250px" m="0 auto" w="100%" pb={20}>
      <TravelTypes />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        mt={["5", "20"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <SlideContinents continents={continents} />
    </Container>
  );
}
