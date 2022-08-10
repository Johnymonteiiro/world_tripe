import type { GetStaticProps, NextPage } from "next";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Main } from "./main";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../service/prismic";
import { ContinentProps } from "../types/types";


const Home = ({ continents }: ContinentProps) => {
  return (
    <>
      <Header />
      <Banner />
      <Main continents={continents} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at("document.type", "continent"),
  ]);

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      name: continent.data.name,
      title: continent.data.title,
      image: continent.data.continentimage.url,
    };
  });

  return {
    props: {
      continents,
    },
  };
};
