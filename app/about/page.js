import Footer from "../components/Layout/footer";
import Navbar from "../components/Layout/navbar";
import Facilites from "../components/facilites";
import Header from "../components/Layout/header";
import Introduction from "../components/introduction";

const About = () => {
  return (
    <>
      <Navbar />
      <Header title={"About Us"} />  
      <Introduction />
      <Facilites />
      <Footer />
    </>
  );
};

export default About;
