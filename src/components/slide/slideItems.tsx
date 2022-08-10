import { Flex, Heading, Text, Link } from "@chakra-ui/react";

interface SlideItemProps {
  text: string;
  image: string;
  slug: string;
  continentName: string;
}

export function SlideItems({
  continentName,
  text,
  image,
  slug,
}: SlideItemProps) {
  console.log(slug);
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('${image}')`}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Flex
        bgGradient=" linear-gradient(0deg, rgba(10, 0, 5, 0.55), rgba(10, 0, 5, 0.55))"
        w="100%"
        color="gray.400"
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
      >
        <Link href={`/continent/${slug}`} style={{ textDecoration: "none" }}>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {continentName}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
          >
            {text}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}
