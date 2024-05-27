import { Jumbotron } from "../components/jumbotron";
import { Navbar } from "../components/navigation";
import { About } from "../components/sections";
import { Footer } from "./../components/sections";
function LandingPage() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />
        <Jumbotron />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
