import { Grid, Text } from "@chakra-ui/react";
import { ContinentsTypes } from "../../types/types";
import Infos from "./Infos";

export default function Content({continent}:ContinentsTypes) {
  return (
    <Grid templateColumns={["1fr","1fr","1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]}>
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
      {continent.description}
      </Text>
      <Infos continent={continent}/>
    </Grid>
  )
}