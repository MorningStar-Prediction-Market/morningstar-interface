import BetDashboard from "@/app/home/_components/BetDashboard/BetDashboard";
import Header from "@/app/home/_components/Header/Header";
import Background25 from "@/assets/images/background_25.png";
import CardCarousel from "@/app/home/_components/Card/CardCarousel";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function HomePage() {
  return (
    <main className="flex flex-col pb-20">
      <div
        className={`${inter.className}`}
        style={{
          backgroundImage: `url(${Background25.src})`,
          backgroundSize: "cover",
        }}
      >
        <Header />
        <div className="mx-auto max-w-[1440px] flex-col pb-20 xl:px-8 md:px-4 px-2 ">
          <CardCarousel />
          <BetDashboard />
        </div>
      </div>
    </main>
  );
}
