import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <NavBar />
        <Hero1 />
      </MaxWidthWrapper>{" "}
      <Hero2 />
      <Footer />
    </>
  );
}
