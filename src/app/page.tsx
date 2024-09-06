import HomePage from "./home/page";
import LandingPage from "./landing/page";

export default function Home() {
  return (
    <main className="flex flex-col pb-20 ">
      <LandingPage />
      {/* <HomePage /> */}
    </main>
  );
}
