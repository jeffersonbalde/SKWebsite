import Chairwoman from "@/components/chairwoman/Chairwoman";
import Council from "@/components/council/Council";
import Events from "@/components/events/Events";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Location from "@/components/location/Location";
import Preloader from "@/components/preloader/Preloader";

export default function Home() {
  return (
    <div>
      {/* <Preloader /> */}
      <Hero />
      <Chairwoman />
      <Council />
      <Events />
      <Location />
      <Footer />
      
    </div>
  );
}
