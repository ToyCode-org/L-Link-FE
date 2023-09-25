import type { Metadata } from "next";
import { getPublicImage } from "@/util/getPubliceImage";

export const metadata: Metadata = {
  title: "로아링크",
  description: "로스트아크 정보 몰아보기",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    title: "로아링크",
    description: "로스트아크 페이지 몰아보기",
    images: [getPublicImage("logo")],
    url: "https://www.mysite.com",
  },
};

export default function Home() {
  return (
    <div>
      <p>home test</p>
    </div>
  );
}
