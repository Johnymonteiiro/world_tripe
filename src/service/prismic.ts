  
import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

const endPoint = process.env.PRISMIC_API_ENDPOINT

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(String(endPoint), {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}