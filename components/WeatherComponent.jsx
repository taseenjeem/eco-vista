import { getWeatherData } from "@/lib/weatherInfo";
import Card from "./Card";
import Image from "next/image";

const WeatherComponent = async ({ lat, long }) => {
  const weatherData = await getWeatherData(lat, long);

  const { main, description } = weatherData.weather[0];

  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_rain.png"
          width={200}
          height={200}
          alt="rain icon"
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
