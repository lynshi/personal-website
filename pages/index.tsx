import ExperienceCarousel from "../components/index/experience-carousel";
import Hero from "../components/index/hero";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout pageTitle="Home" pageDescription="Lyndon Shi's personal website" transparentAtTop={true}>
      {/* <Hero /> */}
      <ExperienceCarousel />
    </Layout>
  );
}
