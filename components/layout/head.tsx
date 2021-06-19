import React from "react";
import NextHead from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

// Fixes sizing of FontAwesome icons.
// https://github.com/FortAwesome/react-fontawesome/issues/284#issuecomment-691707228
config.autoAddCss = false;

interface HeadProps {
  pageTitle: string;
};

export default function Head({ pageTitle }: HeadProps) {
  return (
    <NextHead>
      <title>{pageTitle} | Lyndon Shi</title>
      <link rel="icon" href="/img/favicon/favicon.ico" />
      <meta property="og:title" content={pageTitle + " | Lyndon Shi"} key="title" />
      <meta property="og:author" content="Lyndon Shi" key="author" />
      <style>{dom.css()}</style>
    </NextHead>
  )
}