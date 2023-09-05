"use client";
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
`;

const Content = styled.main`
  margin-top: 150px;
  margin: 0 auto;
  width: 1100px;
`;
