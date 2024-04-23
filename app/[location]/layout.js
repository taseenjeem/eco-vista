import Image from "next/image";
import "../globals.css";

export const metadata = {
  title: "EcoVista Dashboard",
  description: "One Place Dashboard for Eco Information",
};

export default function DashboardLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/assets/images/background.png"
        className="bg-img"
        width={700}
        height={1200}
        alt=""
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
