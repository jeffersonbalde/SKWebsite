import Chairwoman from "@/components/chairwoman/Chairwoman";
import Council from "@/components/council/Council";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Location from "@/components/location/Location";

export default function Home() {
  return (
    <div>
      <Hero />
      <Chairwoman />
      <Council />
      <Location />
      <Footer />
    </div>
  );
}
