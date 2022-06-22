interface cytiesType {
  id: number;
  name: string;
  city: string;
  flag: string;
  image: string;
}

export interface continentsTypes {
  continents: {
    id: string;
    slug: string;
    name: string;
    title: string;
    descriptions: string;
    banner: string;
    banner2: string;

    info: {
      number: number;
      languages: number;
      cyties: number;
    };
    cyties: cytiesType[];
  };
}
