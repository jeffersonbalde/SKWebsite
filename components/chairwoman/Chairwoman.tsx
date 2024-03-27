import Image from "next/image";
import Link from "next/link";

const Chairwoman = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center w-[24rem] lg:w-[60rem] xl:w-[70rem] m-auto my-20 gap-9 lg:gap-14 px-8">
      <div className="">
        <Image
          src="/dianaduran.png"
          alt="Diana Rose Duran"
          width={1300}
          height={500}
          className="w-80 lg:w-[70rem]"
        />
      </div>
      <div className="flex flex-col gap-5 lg:gap-6 text-color-dark-blue">
        <div className="flex items-center gap-4">
          <Image src="/line.svg" alt="line" width={50} height={50} />
          <h1 className="font-medium text-lg lg:text-xl">SK Chairwoman</h1>
        </div>
        <h1 className="font-semibold text-2xl lg:text-4xl">
          Diana Rose ‘Yan’ Duran
        </h1>
        <div className="font-medium">
          <h2 className="text-base lg:text-lg leading-relaxed">
            "A true leader does not create separation, A true leader brings
            people together." - Tendai Ruben Mbofana
          </h2>
        </div>
        <div className="">
          <h1 className="font-medium text-base lg:text-lg leading-relaxed">
            Barangay Captain Jeffrey P. Campaña, an accomplished advocate for
            working people and a proud product of the District. Barangay Captain
            Jeffrey P. Campaña started serving since 2013.
          </h1>
        </div>
        <Link href="https://www.facebook.com/skbrgylumbia" className="mt-4">
          <button className="bg-color-blue text-color-white-smoke font-medium py-3 px-6 rounded-sm lg:text-lg">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="absolute bottom-9 -z-40 left-10 lg:left-[44rem] lg:bottom-24">
        <Image
          src="/philoverlay.png"
          alt="philoverlay"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Chairwoman;
