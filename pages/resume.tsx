import React from "react";
import Layout from "../components/layout/layout";

const Resume = () => (
  <Layout pageTitle="Résumé" pageDescription="Lyndon Shi's Resume" transparentAtTop={true}>
    <div className="justify-center p-4">
      <iframe
        src="https://onedrive.live.com/embed?cid=9F991BBD6D539E0B&resid=9F991BBD6D539E0B%218482&authkey=ANjNscNhFmXaMCQ&em=2"
        className="w-full h-screen"
        title="resume">
      </iframe>
    </div>
  </Layout>
);

export default Resume;
