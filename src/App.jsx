import {
  Header,
  HeroSection,
  Divider,
  About,
  Discovery,
  Tokenomics,
  Roadmap,
  Contact,
  Banner,
  Footer,
} from "./components";

import "animate.css";
import { useInView } from "react-intersection-observer";

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <Divider />
        <About />
        <Divider />
        <Discovery />
        <Divider />
        <Tokenomics />
        <Divider />
        <Roadmap />
        <Divider />
        <Contact />
        <Banner />
      </main>

      <Footer />
    </>
  );
}

export default App;
