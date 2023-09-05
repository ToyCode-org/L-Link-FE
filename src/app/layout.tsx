import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styled from "styled-components";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOA-Link",
  description: "---",
  keywords: "---",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Content className={inter.className}>
        {children}
        <Header />
      </Content>
    </html>
  );
}

const Content = styled.body`
  background-color: gray;
`;
