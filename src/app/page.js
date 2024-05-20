import About from "@/components/section/About";
import Banner from "@/components/section/Banner";
import Facts from "@/components/section/Facts";
import Feature from "@/components/section/Feature";
import NewsLetter from "@/components/section/NewsLetter";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Team from "@/components/section/Team";
import Testimonial from "@/components/section/Testimonial";


export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Facts />
      <Services />
      <NewsLetter />
      <Projects />
      <Testimonial />
      <Team />
    </>
  );
}
