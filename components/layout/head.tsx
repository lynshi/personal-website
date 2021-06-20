import React from "react";
import NextHead from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

// Fixes sizing of FontAwesome icons.
// https://github.com/FortAwesome/react-fontawesome/issues/284#issuecomment-691707228
config.autoAddCss = false;

interface HeadProps {
  title: string;
  description: string;
};

export default function Head({ title, description }: HeadProps) {
  return (
    <NextHead>
      <title>{title} | Lyndon Shi</title>
      <link rel="icon" href="/img/favicon/favicon.ico" />
      <meta property="og:title" content={title + " | Lyndon Shi"} key="title" />
      <meta property="og:author" content="Lyndon Shi" key="author" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:description" content={description} key="description" />
      <style>{dom.css()}</style>
    </NextHead>
  )
}