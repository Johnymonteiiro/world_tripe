import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Cities from "../../components/Cities";
import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import { Header } from "../../components/header";
import Prismic from '@prismicio/client';
import { getPrismicClient } from "../../service/prismic";
import { RichText } from 'prismic-dom';
import { ParsedUrlQuery } from "querystring";
import { CitiesProps, ContinentsTypes } from "../../types/types";

interface IParams extends ParsedUrlQuery {
  slug: string
}

export default function Continent({continent}:ContinentsTypes) {

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {continent.title}</title>

        <meta property="og:title" content={`WorldTrip ${continent.title}`} />
        <meta property="og:description" content={continent.description} />
        <meta name="twitter:title" content={`WorldTrip ${continent.title}`} />

        <meta name="twitter:image" content={continent.banner_image} />
        <meta name="twitter:image:src" content={continent.banner_image} />
        <meta property="og:image" content={continent.banner_image} />
        <meta property="og:image:secure_url" content={continent.banner_image} />
      </Head>

      <Header />
      <ContinentBanner continent={continent} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continent'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  
  const prismic = getPrismicClient();
  const { slug } = context.params as IParams;
  const response = await prismic.getByUID('continent', String(slug), {});

  const continent = {
    slug:response.uid,
    title: response.data.name,
    description: RichText.asText(response.data.description),
    banner_image: response.data.continentbanner.url,
    countries: response.data.number,
    languages: response.data.languages,
    cities: response.data.cityes,
    cities_list: response.data.citieslist,
    cities100: response.data.cities100.map((city:CitiesProps) => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.countryimage.url,
        flag:city.flag.url,
      }
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1800,
  }
}