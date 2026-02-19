import HomeFremiDescription from "./home-fremi-description";
import HomeHeroSection from "./home-hero-section";
import HomeInfo from "./home-info";
import HomeTransport from "./home-transport";
import HomeTransportCards from "./home-transport-cards";
import HomeWelcomeFremi from "./home-welcome-fremi";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeInfo />
      <HomeTransport />
      <HomeTransportCards />
      <HomeWelcomeFremi />
      <HomeFremiDescription />
    </>
  );
}
