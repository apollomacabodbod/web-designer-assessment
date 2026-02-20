import HomeContactUsForm from "./home-contact-us-form";
import HomeFremiServices from "./home-fremi-services";
import HomeHeroSection from "./home-hero-section";
import HomeInfo from "./home-info";
import HomeTransport from "./home-transport";
import HomeTransportCards from "./home-transport-cards";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeInfo />
      <HomeTransport />
      <HomeTransportCards />
      <HomeFremiServices />
      <HomeContactUsForm />
    </>
  );
}
