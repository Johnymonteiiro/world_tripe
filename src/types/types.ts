
export interface ContinentProps {
  continents: {
    slug: string;
    name: string;
    title: string;
    image: string;
  }[];
}

export interface CitiesProps {
  city: string;
  country: string;
  thumbnail:string;
  countryimage:{
    url:string
  };
  flag:{
    url:string
  };
}

export interface ContinentsTypes {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100:CitiesProps[]
  }
}

