import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({

    colors: {
        yellow: {
            "900": "#FFBA08",
        },
        white:{
          "900":"#F5F8FA"
        },
        gray:{
          "500":"#47585B",
          "400":"#DADADA"
        }
    },
    
    fonts :{
        heading: 'Poppins',
        body:'Poppins',
    },
    
    styles:{
        global:{
          body:{
              bg:'white.900',
              color: 'gray.500'
          }
        }
    }
})