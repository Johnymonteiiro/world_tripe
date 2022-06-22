import { Grid, GridItem } from "@chakra-ui/react";
import { TravelItems } from "./travelItems";


export function TravelTypes (){
  
  return(
    <Grid templateColumns={['1fr 1fr','1fr 1fr', '1fr 1fr', 'repeat(5,1fr)']} 
  w='100%'
   justifyContent='space-between'
   alignItems="center"
   mt={["10","32"]}
   mx="auto"
   maxW="1160"
   gap={[1,5]}
  >
    <GridItem>
      <TravelItems icon="cocktail" alt='cocktail' text='Vida noturna'/>
    </GridItem>
    <GridItem>
      <TravelItems icon="surf" alt='prancha' text='Praia'/>
    </GridItem>
    <GridItem>
      <TravelItems icon="building" alt='edifício' text='Moderno'/>
    </GridItem>
    <GridItem>
      <TravelItems icon="museum" alt='museu' text='Clássico'/>
    </GridItem>
    <GridItem colSpan={[2,2,2,1]}>
      <TravelItems icon="earth" alt='terra' text='e mais...'/>
    </GridItem>
  </Grid>
  )
}