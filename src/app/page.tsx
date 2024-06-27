import Contact from "@/components/home/Contact";
import HowItWorks from "@/components/home/HowItWorks";
import TreningAuctions from "@/components/home/TreningAuctions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto space-y-24 px-2">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/50 blur-[300px] "></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-black-500/50 blur-[300px] "></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-300/50 blur-[300px] "></div>
      <section className="flex justify-between max-lg:flex-col items-center relative">
        <div className="flex flex-col justify-center gap-5 md:w-1/2">
          <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 font-extrabold">
            MOBIUS
          </span>
          <h1 className="text-6xl text-white">
            Where Art and Tax strategy merge{" "}
          </h1>
          <p className="text-white">
            Revealing how savvy tax planning can become a nuanced and creative
            as the are is its support.
          </p>
          <div
            className="flex gap-5"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <button className="px-7 py-2 rounded-sm bg-gradient-to-r bg-orange-400 hover:opacity-80">
              Sign Up
            </button>
          </div>
        </div>
        <div
          className="max-lg:absolute max-lg:-z-10 max-lg:bottom-0"
          data-aos="fade-up"
        >
          <Image
            width={400}
            height={400}
            src={"/images/nft.png"}
            alt="NFT Marketplace - Mobius"
            className="h-full max-lg:opacity-10 "
          />
        </div>
      </section>
      <HowItWorks />
      <TreningAuctions />

      <Contact />
    </main>
  );
}
