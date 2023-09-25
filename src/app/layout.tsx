"use client";
import React from "react";
import { Inter } from "next/font/google";
import styled from "styled-components";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LayoutBody className={inter.className}>
        <Header />
        <Content>{children}</Content>
      </LayoutBody>
    </html>
  );
}

const LayoutBody = styled.body`
  color: white;
  background-color: #0f0f0f;

  & a {
    text-decoration: none;
    &:link {
      color: white;
    }
    &:visited {
      color: white;
    }
  }
  & ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Content = styled.main`
  margin: 0 auto;
  margin-top: 120px;
  width: 1100px;
`;
