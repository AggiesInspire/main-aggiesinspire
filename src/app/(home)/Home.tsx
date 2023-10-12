import HomeScreen from "./HomeScreen";
import HomeAbout from "./(home-about)/HomeAbout";
import HomeMedia from "./(home-media)/HomeMedia";
import HomePartnersSection from "./HomePartnersSection";

const Home = () => {
  return (
    <section id="home-section">
      <HomeScreen />
      <HomePartnersSection />
      <HomeAbout />
      <HomeMedia />
    </section>
  );
};

export default Home;
