import { Jumbotron } from "../components/jumbotron";
import { Navbar } from "../components/navigation";
import {
  About,
  Portofolio,
  Certification,
  Footer,
} from "../components/sections";
function LandingPage() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
        <Jumbotron />
        <About />
        <Portofolio />
        <Certification />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
