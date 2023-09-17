import Head from "next/head";
import { getPublicImage } from "@/util/getPubliceImage";

export const MetaData = () => {
  return (
    <Head>
      <title>Loa-Link</title>
      <meta name="description" content="로스트아크 정보 몰아보기" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="로아링크 - Loa-Link" />
      <meta property="og:description" content="로스트아크 페이지 몰아보기" />
      <meta property="og:image" content={getPublicImage("logo")} />
      <meta property="og:url" content="http://www.mysite.com" />
    </Head>
  );
};
